import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@api": "/src/api",
      "@axios": "/src/axios",
      "@constants": "/src/constants",
    },
  },
});
