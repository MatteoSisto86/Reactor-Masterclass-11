
TABELLA PROFILES

create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  first_name text,
  last_name text,
  avatar_url text,
  constraint username_length check (char_length(username) >= 3)
);

POLICIES

alter table profiles
  enable row level security;
create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);
create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);
create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

TRIGGER

create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, first_name, last_name, username)
  values (
    new.id, 
    new.raw_user_meta_data ->> 'first_name', 
    new.raw_user_meta_data ->> 'last_name', 
    new.raw_user_meta_data ->> 'username');
  return new;
end;
$$;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


POLICIES AVATAR

create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');
create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars'); 