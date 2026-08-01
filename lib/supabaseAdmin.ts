import 'server-only';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseAdminConfigured = Boolean(supabaseUrl && serviceRoleKey);

let client: SupabaseClient | null = null;

/**
 * Server-only Supabase client using the service role key. Bypasses RLS —
 * never import this from a client component.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (!isSupabaseAdminConfigured) return null;
  if (!client) {
    client = createClient(supabaseUrl as string, serviceRoleKey as string, {
      auth: { persistSession: false }
    });
  }
  return client;
}
