# Bogura Government Polytechnic Institute website

Mobile-first bilingual website concept with a separate admin URL and Supabase-ready public content.

## Included
- index.html: public website in Bangla and English
- assets/css/style.css: responsive layout and technology-specific animations
- assets/js/main.js: language toggle, faculty filters and public data loading
- admin.html and assets/js/admin.js: separate administrator login/content management (initial scaffold)
- supabase/schema.sql: database tables and Row Level Security policies

## Supabase setup
1. Create a dedicated Supabase project for this website.
2. Review and apply supabase/schema.sql in the SQL Editor.
3. Create an administrator in Supabase Auth, then add that user's UUID to public.admin_users as described in the SQL comments.
4. Add the project's URL and public anon/publishable key to assets/js/main.js and assets/js/admin.js. Never expose a service-role key in browser code.
5. Test access policies, login and publishing before launch.

## Deploy
Import the repository into Vercel as a static site, with no build command and output directory set to the repository root. Admin page path: /admin.html.

Official staff names, active technologies, qualifications, contact details and notices must be verified against official institutional sources before publishing. This redesign is not an official government publication unless approved by the institute.