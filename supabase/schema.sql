-- Aicha Njimate portfolio — full Supabase schema (contact requests + testimonials + admin allow-list).
-- Run this once in the Supabase SQL editor (or via `supabase db push`) on your project.
-- Safe to re-run: every statement is idempotent (create ... if not exists / drop policy if exists).

create extension if not exists "pgcrypto";

-- =========================================================================
-- 1. admin_users — allow-list of Supabase Auth users who may access /admin
-- =========================================================================
-- Being able to sign in with a valid Supabase Auth account is NOT enough to
-- read or manage contact_requests/testimonials: the caller's auth.uid() must
-- also have a row here. Rows are added only via supabase/seed_admin.sql (or
-- manually in the SQL editor) — never through the app or an API route.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

-- A signed-in user may only ever see whether *their own* id is on the list.
-- There is no select policy exposing other rows, and no insert/update/delete
-- policy at all for anon or authenticated — this table is managed exclusively
-- from the SQL editor / service role.
drop policy if exists "Authenticated can read own admin row" on public.admin_users;
create policy "Authenticated can read own admin row"
  on public.admin_users
  for select
  to authenticated
  using (user_id = auth.uid());

-- Security-definer helper: true only if the currently authenticated user's id
-- is present in admin_users. Runs as its owner, so it can evaluate this even
-- though the policy above only lets a caller read their own row directly.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.admin_users where user_id = auth.uid()
  );
$$;

grant execute on function public.is_admin() to authenticated;

-- =========================================================================
-- 2. contact_requests — submissions from the "Contact" form
-- =========================================================================

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  current_website text,
  project_type text,
  estimated_budget text,
  target_launch_date date,
  message text not null,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'in_progress', 'done', 'archived')),
  created_at timestamptz not null default now()
);

-- Migrate an older install that used the previous 4-state enum.
do $$
begin
  update public.contact_requests set status = 'in_progress' where status = 'qualified';
  update public.contact_requests set status = 'done' where status = 'closed';
exception when undefined_table then
  null;
end $$;

create index if not exists contact_requests_status_idx on public.contact_requests (status);
create index if not exists contact_requests_created_at_idx on public.contact_requests (created_at desc);

alter table public.contact_requests enable row level security;

-- The public site submits through the server-side /api/contact route using the
-- service role key, which bypasses RLS entirely. This insert policy exists only
-- as defense in depth (e.g. if a client-side insert path is ever added): it
-- still forces every public insert to start as "new".
drop policy if exists "Public can insert contact requests" on public.contact_requests;
create policy "Public can insert contact requests"
  on public.contact_requests
  for insert
  to anon
  with check (status = 'new');

-- No select policy for "anon" is defined on purpose: the public can never read
-- contact requests, not even their own. Nothing here ever exposes an email
-- address or message in the browser.

-- Only users present in admin_users (checked via is_admin()) can read, update
-- or delete contact requests — being merely authenticated is not enough.
drop policy if exists "Authenticated can read contact requests" on public.contact_requests;
create policy "Admin can read contact requests"
  on public.contact_requests
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Authenticated can update contact requests" on public.contact_requests;
create policy "Admin can update contact requests"
  on public.contact_requests
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Authenticated can delete contact requests" on public.contact_requests;
create policy "Admin can delete contact requests"
  on public.contact_requests
  for delete
  to authenticated
  using (public.is_admin());

-- =========================================================================
-- 3. testimonials — submissions from the "Laisser un avis" form
-- =========================================================================

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  company text not null,
  email text not null,
  rating smallint not null check (rating between 1 and 5),
  message text not null,
  consent boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  approved_at timestamptz
);

create index if not exists testimonials_status_idx on public.testimonials (status);
create index if not exists testimonials_created_at_idx on public.testimonials (created_at desc);

alter table public.testimonials enable row level security;

-- Anyone (anon key) can submit a new testimonial. It always starts as "pending"
-- — the client can never choose its own status.
drop policy if exists "Public can insert testimonials" on public.testimonials;
create policy "Public can insert testimonials"
  on public.testimonials
  for insert
  to anon
  with check (status = 'pending');

-- The public (anon key) can only ever read testimonials that have been
-- approved. Pending and rejected rows are never exposed, and the public site
-- never selects the email column for display.
drop policy if exists "Public can read approved testimonials" on public.testimonials;
create policy "Public can read approved testimonials"
  on public.testimonials
  for select
  to anon
  using (status = 'approved');

-- Only users present in admin_users (checked via is_admin()) can read every
-- row, and update/delete them (approve, reject, delete).
drop policy if exists "Authenticated can read all testimonials" on public.testimonials;
create policy "Admin can read all testimonials"
  on public.testimonials
  for select
  to authenticated
  using (public.is_admin());

drop policy if exists "Authenticated can update testimonials" on public.testimonials;
create policy "Admin can update testimonials"
  on public.testimonials
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Authenticated can delete testimonials" on public.testimonials;
create policy "Admin can delete testimonials"
  on public.testimonials
  for delete
  to authenticated
  using (public.is_admin());
