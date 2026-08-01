import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (!client) {
    client = createClient(supabaseUrl as string, supabaseAnonKey as string);
  }
  return client;
}

export interface TestimonialInsert {
  client_name: string;
  company: string;
  email: string;
  rating: number;
  message: string;
  consent: boolean;
}

export interface TestimonialRow {
  id: string;
  client_name: string;
  company: string;
  rating: number;
  message: string;
  consent: boolean;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  approved_at: string | null;
}

export interface ContactRequestRow {
  id: string;
  name: string;
  email: string;
  company: string | null;
  current_website: string | null;
  project_type: string | null;
  estimated_budget: string | null;
  target_launch_date: string | null;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'done' | 'archived';
  created_at: string;
}
