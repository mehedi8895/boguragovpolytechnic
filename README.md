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

## BGPI AI assistant

The site includes a bilingual (Bangla/English) floating BGPI AI chat widget, a custom navy-and-gold logo, and top-bar controls to hide or re-enable the icon. The chat UI is in `assets/js/bgpi-ai.js`, styles in `assets/css/bgpi-ai.css`, logo in `assets/bgpi-ai-logo.svg`, and the server-side Vercel function is `api/bgpi-ai.js`.

### Enable AI answers on Vercel

The chat widget is deployed with the site, but live AI answers require a provider API key:

1. In the Vercel dashboard, open the project connected to this repository.
2. Go to **Settings → Environment Variables**.
3. Add `OPENAI_API_KEY` as a sensitive environment variable for Production (and Preview if desired). Get the key from your AI provider account; do not put it in GitHub or browser JavaScript.
4. Optional: set `OPENAI_MODEL` (defaults to `gpt-4o-mini`), `SUPABASE_URL`, and `SUPABASE_ANON_KEY` if the BGPI content database changes.
5. Redeploy after saving environment variables.

The function reads only published rows from `bgpi_faculty` and `bgpi_notices` and combines them with the website's public information. It does not use a Supabase service-role key. If `OPENAI_API_KEY` is missing, the widget explains that AI answers are not configured instead of pretending to answer.

**Cost note:** AI API usage may be billed by the provider. Set a usage limit in the provider dashboard before sharing the assistant publicly. The website redesign and assistant are not an official government publication unless the institute approves them.
