import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config + https://docs.astro.build/en/guides/internationalization/
export default defineConfig({
	site: 'https://neemias.org',
	integrations: [mdx(), sitemap()],
	i18n: {
    defaultLocale: "pt-bt",
    locales: ["en", "pt-br"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});
