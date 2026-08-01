-- Grants a Supabase Auth user access to /admin by adding them to admin_users.
-- Run this AFTER supabase/schema.sql. Safe to run multiple times (idempotent
-- upsert via "on conflict do nothing").
--
-- The uid below must already exist in auth.users (Authentication > Users in
-- the Supabase dashboard) — create the admin account there first if needed.

insert into public.admin_users (user_id)
values ('e4f3a990-2a1c-4527-82b1-3f4e93b060fb')
on conflict (user_id) do nothing;
