# Bogura Government Polytechnic — Admin setup

## Supabase project used
The organization has reached its two-active-free-project limit, so BGPI uses the existing Gadgets BD Supabase project without pausing or deleting either existing project. BGPI data is isolated in `bgpi_admin_users`, `bgpi_faculty`, and `bgpi_notices`; do not rename these tables or point BGPI at the GDFC project.

Project URL: https://pkvcnxxuulzglzavzwuf.supabase.co

The website uses the public publishable key in browser code. Never place a service-role/secret key in GitHub or frontend code.

## Create the first admin
1. Open the [Supabase dashboard](https://supabase.com/dashboard/project/pkvcnxxuulzglzavzwuf/auth/users).
2. Go to Authentication → Users → Add user, and create an account using the intended administrator email and a strong temporary password.
3. Copy the newly created user's UUID.
4. Open SQL Editor and run this query, replacing the placeholder with that UUID:

```sql
insert into public.bgpi_admin_users(user_id, role, is_active)
values ('AUTH_USER_UUID_HERE', 'owner', true)
on conflict (user_id) do update
set role = 'owner', is_active = true;
```

5. Sign in at `/admin.html` with that email and password. Use the Supabase dashboard to reset/change the temporary password after first login.

## Safety
- Only add trusted staff to `bgpi_admin_users`.
- Public visitors can read published BGPI notices and faculty profiles only.
- Keep the existing Gadgets BD tables untouched.
- The first administrator cannot be provisioned from the browser; promotion must be performed by a trusted project owner in the SQL Editor.
