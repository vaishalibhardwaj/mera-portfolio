import { defineConfig } from "vite";

export default defineConfig({
  base: "/my-portfolio",
  build: {
    minify: "terser",
  },
});
