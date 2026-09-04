insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('gallery','gallery',true,8388608,array['image/jpeg','image/png','image/webp','image/avif'])
on conflict (id) do update set public=true,file_size_limit=8388608,allowed_mime_types=excluded.allowed_mime_types;

-- Public visitors can read gallery files. All writes happen through the protected server API.
create policy "Gallery files are public" on storage.objects for select using (bucket_id='gallery');

create index if not exists posts_published_at_idx on public.posts (published,published_at desc);
create index if not exists gallery_display_order_idx on public.gallery_images (display_order);
