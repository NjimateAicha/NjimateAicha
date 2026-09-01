import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { getSupabaseClient } from '../../../lib/supabaseClient';
import { isRateLimited } from '../../../lib/rateLimit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const company = String(body.company || '').trim();
  const currentWebsite = String(body.current_website || '').trim();
  const projectType = String(body.project_type || '').trim();
  const estimatedBudget = String(body.estimated_budget || '').trim();
  const targetLaunchDate = String(body.target_launch_date || '').trim();
  const message = String(body.message || '').trim();

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 });
  }

  // Prefer the service-role client (bypasses RLS). If SUPABASE_SERVICE_ROLE_KEY
  // is not configured, fall back to the anon client: the `contact_requests`
  // table has an anon INSERT policy that ONLY accepts rows with status = 'new'
  // (see supabase/schema.sql), and NO anon SELECT policy at all — the public can
  // never read a contact request back. status is forced to 'new' server-side.
  const supabase = getSupabaseAdmin() ?? getSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Server is not configured' }, { status: 500 });
  }

  // No `.select()` here on purpose: the anon role cannot read the row back
  // (no anon SELECT policy), and the inserted id is not used by the client.
  const { error } = await supabase.from('contact_requests').insert([
    {
      name,
      email,
      company,
      current_website: currentWebsite,
      project_type: projectType,
      estimated_budget: estimatedBudget,
      target_launch_date: targetLaunchDate || null,
      message,
      status: 'new'
    }
  ]);

  if (error) {
    console.error('[api/contact] insert failed:', error.message);
    return NextResponse.json({ error: 'Could not save your request' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
