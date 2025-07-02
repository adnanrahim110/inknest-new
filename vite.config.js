import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) {
            return "react-core";
          }
          if (id.includes("react-router")) {
            return "react-router";
          }
          if (id.includes("react-toastify")) {
            return "toastify";
          }
          return "vendor";
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
})
