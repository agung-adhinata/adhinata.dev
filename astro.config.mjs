// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@astrojs/react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  fonts: [
    {
      name: "Geist Sans",
      cssVariable: "--font-geist",
      provider: fontProviders.fontsource(),
      fallbacks: ["sans-serif"],
    },
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      provider: fontProviders.fontsource(),
      fallbacks: ["monospace"],
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "ayu-dark",
    },
  },
});
