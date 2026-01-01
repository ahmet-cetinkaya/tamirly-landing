// @ts-check
import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tamirly.ahmetcetinkaya.me",
  compressHTML: true,
  integrations: [solidJs(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "solid-js": path.resolve(__dirname, "./node_modules/solid-js"),
        "solid-js/web": path.resolve(__dirname, "./node_modules/solid-js/web"),
        "@packages": path.resolve(__dirname, "../../../packages"),
      },
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
