import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
    site: SITE.siteUrl,
    integrations: [
        tailwind()
    ]
});
