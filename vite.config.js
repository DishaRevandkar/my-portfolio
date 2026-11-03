import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the site works on GitHub Pages (/my-portfolio/) and on Vercel
  base: "./",
  css: {
    modules:{
      localsConvention: "camelCase",
    },
  },
});
