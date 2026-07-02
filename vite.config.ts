import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  // GitHub Pages project sites are served from /<repo-name>/, not /.
  // `vite preview` serves the built dist as-is, so it must match this too —
  // only the plain dev server (`npm run dev`) overrides it back to "/" via
  // the --base CLI flag, which takes precedence over this config value.
  base: "/CMC_EDR/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
  },
});
