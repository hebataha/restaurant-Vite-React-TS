import mongezVite from "@mongez/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    svgr({
      exportAsDefault: false,
    }),
    mongezVite(),
    react(),
  ],
  server: {
    port: 5000,
  },
  envPrefix: "APP_",
}));
