import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    react()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  server: {
    host: true,
    port: 4321
  },
  vite: {
    optimizeDeps: {
      include: ['framer-motion']
    }
  }
});