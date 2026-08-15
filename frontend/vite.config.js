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
        sifa: resolve(import.meta.dirname, "sifa-skilling-centre/index.html"),
        involved: resolve(import.meta.dirname, "get-involved/index.html"),
        sponsor: resolve(import.meta.dirname, "sponsor-a-child/index.html"),
        careers: resolve(import.meta.dirname, "careers/index.html"),
        contact: resolve(import.meta.dirname, "contact/index.html"),
      },
    },
  },
});
