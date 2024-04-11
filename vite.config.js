import { defineConfig } from "vite";

export default defineConfig({
  base: "/myportfolio",
  build: {
    minify: "terser",
  },
});
