import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://onyxcode.dev',
  output: 'static',
  redirects: {
    '/': '/en/',
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
