create extension if not exists "pgcrypto";
create table if not exists public.posts (id uuid primary key default gen_random_uuid(),title text not null,slug text unique not null,excerpt text,content text,cover_image text,category text,published boolean not null default false,published_at timestamptz,created_at timestamptz not null default now(),updated_at timestamptz not null default now());
create table if not exists public.gallery_images (id uuid primary key default gen_random_uuid(),image_url text not null,alt_text text not null,caption text,display_order integer not null default 0,created_at timestamptz not null default now());
create table if not exists public.contact_inquiries (id uuid primary key default gen_random_uuid(),name text not null,company text,country text not null,email text not null,phone text,product text,message text not null,status text not null default 'new',created_at timestamptz not null default now());
alter table public.posts enable row level security;alter table public.gallery_images enable row level security;alter table public.contact_inquiries enable row level security;
create policy "Published posts are public" on public.posts for select using (published = true);
create policy "Gallery is public" on public.gallery_images for select using (true);
-- No public insert policy is created. Contact submissions use the server-only service role in app/api/contact.
