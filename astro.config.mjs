import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wordpane.dev',
  integrations: [
    sitemap({
      // Orçamentos são privados: nunca entram no sitemap.
      filter: (page) => !page.includes('/orcamento/'),
    }),
  ],
});
