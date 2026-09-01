import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../lib/supabaseAdmin';
import { getSupabaseClient } from '../../../lib/supabaseClient';
import { isRateLimited } from '../../../lib/rateLimit';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(`testimonial:${ip}`)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const clientName = String(body.client_name || '').trim();
  const company = String(body.company || '').trim();
  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();
  const consent = Boolean(body.consent);
  const rating = Number(body.rating);

  if (!clientName || !company || !email || !message || !consent || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 });
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Invalid rating' }, { status: 400 });
  }

  // Prefer the service-role client (bypasses RLS). If SUPABASE_SERVICE_ROLE_KEY
  // is not configured, fall back to the anon client: the `testimonials` table
  // has an anon INSERT policy that ONLY accepts rows with status = 'pending'
  // (see supabase/schema.sql), and no anon UPDATE/DELETE policy and no anon
  // SELECT on non-approved rows. So the review is still saved as pending and
  // can never be auto-published — approval stays a manual step in /admin.
  const supabase = getSupabaseAdmin() ?? getSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Server is not configured' }, { status: 500 });
  }

  // status is always forced to "pending" here — the client can never choose it.
  const { error } = await supabase.from('testimonials').insert([
    {
      client_name: clientName,
      company,
      email,
      rating,
      message,
      consent,
      status: 'pending'
    }
  ]);

  if (error) {
    console.error('[api/testimonials] insert failed:', error.message);
    return NextResponse.json({ error: 'Could not save your review' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
