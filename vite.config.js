import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    hmr: {
      overlay: false,
    },
  },

  build: {
    outDir: "dist", // Ensure the output directory is set to 'dist'
  },
});
