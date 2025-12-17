// @ts-check
import { defineConfig } from 'astro/config';
import { remarkProjectFrontmatter } from './src/plugins/remark-project-frontmatter.mjs';
// https://astro.build/config

export default defineConfig({
    markdown: {
        remarkPlugins: [remarkProjectFrontmatter]
    },
});
