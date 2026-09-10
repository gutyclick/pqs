create table if not exists public.gallery_collections (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  slug text unique not null,
  display_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.gallery_collections enable row level security;
create policy "Published gallery collections are public" on public.gallery_collections for select using (published = true);

alter table public.gallery_images add column if not exists collection_id uuid references public.gallery_collections(id) on delete cascade;
alter table public.posts add column if not exists content_blocks jsonb not null default '[]'::jsonb;

create index if not exists gallery_collections_order_idx on public.gallery_collections (display_order,created_at desc);
create index if not exists gallery_images_collection_idx on public.gallery_images (collection_id,display_order);
