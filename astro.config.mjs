// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
      defaultLocale: "en",
      locales: ["fr", "en"],
      routing: {
          prefixDefaultLocale: true,
      },
  },

  integrations: [react()],
});