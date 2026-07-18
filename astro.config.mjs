import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wordpane.dev',
  integrations: [
    sitemap({
      // Orçamentos privados e a página de planos ficam fora do sitemap.
      filter: (page) => !page.includes('/orcamento/') && !page.includes('/planos/'),
    }),
  ],
});
