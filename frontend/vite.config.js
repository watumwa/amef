import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about/index.html"),
        work: resolve(import.meta.dirname, "our-work/index.html"),
        amhs: resolve(import.meta.dirname, "amhs/index.html"),
        brassBandStory: resolve(import.meta.dirname, "success-stories/brass-band-club/index.html"),
        news: resolve(import.meta.dirname, "news/index.html"),
        sifa: resolve(import.meta.dirname, "sifa-skilling-centre/index.html"),
        involved: resolve(import.meta.dirname, "get-involved/index.html"),
        sponsor: resolve(import.meta.dirname, "sponsor-a-child/index.html"),
        volunteer: resolve(import.meta.dirname, "volunteer/index.html"),
        careers: resolve(import.meta.dirname, "careers/index.html"),
        policies: resolve(import.meta.dirname, "policies/index.html"),
        contact: resolve(import.meta.dirname, "contact/index.html"),
        search: resolve(import.meta.dirname, "search/index.html"),
      },
    },
  },
});
