import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [react()],
});
