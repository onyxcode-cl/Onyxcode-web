# AGENTS.md

> Product/design/content context lives in `context.md` — read it for the page's
> purpose, information architecture, palette and typography.

Marketing site for **OnyxCode**, a technology services company (custom apps,
consulting, workflow automation). Astro 7 static site, bilingual EN/ES,
light/dark themes. Single landing page: Navbar, Hero, Stack, Services, Process,
Portfolio, About, Contact, Footer.

## Commands

- `npm run dev` — dev server on `:4321`. Astro 7 manages it as a background
  process: use `npx astro dev stop|status|logs` (plain `Ctrl-C` won't apply if
  you started it detached).
- `npm run check` — `astro check`. This is the ONLY lint/typecheck; there is no
  linter, formatter, or test suite. Run it after edits.
- `npm run build` — static output to `dist/` (also emits `sitemap-index.xml`).
- `npm run preview` — serve the built `dist/`.
- Docker: `docker build -t onyxcode-web .` + `docker run --rm -p 8080:80 onyxcode-web`.
  Requires a running daemon; on this Mac start it with `colima start`.

## i18n (hand-rolled, NOT Astro's `i18n` config)

- Locales and all copy live in `src/i18n/ui.ts` (`languages` map + `ui`
  dictionaries). `src/pages/[lang]/index.astro` generates routes from
  `Object.keys(ui)`, so a new locale needs an entry there.
- A new locale ALSO requires updating the hardcoded `en|es` regex that rewrites
  the URL segment in `src/layouts/BaseLayout.astro` and
  `src/components/LangSwitch.astro`.
- All user-facing text goes in `ui.ts` for BOTH `en` and `es`; missing keys
  silently fall back to `en`. Use `t('key')` from `src/i18n/utils.ts`.
- Root `/` redirect is config-only (`redirects` in `astro.config.mjs`); there is
  no `src/pages/index.astro`.

## Contact & content config

- `src/config.ts` centralizes the company `email`, `whatsapp` URL and the tech
  `stack` chips. These are placeholders — replace with real data before release.

## Styling

- Use only semantic tokens from `src/styles/tokens.css` (`--bg`, `--surface`,
  `--border`, `--text`, `--brand`, …). Every color must work in both themes;
  never hardcode hex in components.
- Theme is `data-theme="dark|light"` on `<html>`, set by an inline anti-FOUC
  script in `BaseLayout` and persisted under `localStorage` key
  `onyxcode-theme`.
- Fonts are self-hosted via `@fontsource-variable/*` (imported in
  `BaseLayout`). Family names are `'Inter Variable'` / `'JetBrains Mono Variable'`.
- Component styles are scoped `<style>` blocks per `.astro` file.
- Section layout helpers (`.section`, `.eyebrow`, `.card`, `.grid--2/3`) live in
  `src/styles/global.css`; sections are plain `<section id="...">` components in
  `src/components/` (anchor ids are Spanish: `#servicios`, `#portafolio`,
  `#nosotros`, `#contacto`, shared by both locales).

## Deploy

- Multi-stage Docker: `node:22-alpine` builds, `nginx:1.27-alpine` serves
  `dist/` on port 80. Healthcheck/nginx path is `/healthz`. Config in
  `nginx.conf`; target platform is Coolify (build pack = Dockerfile, port 80).
- Placeholders to replace before release: `site` in `astro.config.mjs`, and the
  contact/stack data in `src/config.ts`.

## Absent (don't go looking)

No tests, no ESLint/Prettier, no CI workflows, no runtime env vars.
