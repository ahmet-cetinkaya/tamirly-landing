// @ts-check
import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "solid-js": path.resolve(__dirname, "./node_modules/solid-js"),
        "solid-js/web": path.resolve(__dirname, "./node_modules/solid-js/web"),
        // Also map acore packages to source so Vite resolves them correctly
        "acore-solid": path.resolve(__dirname, "../../../packages/acore-solid"),
        "acore-ts": path.resolve(__dirname, "../../../packages/acore-ts"),
      },
    },
  },
});
