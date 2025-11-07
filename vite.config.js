import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    // Use PostCSS as the transformer instead of Lightning CSS
    transformer: 'postcss',
  },
  build: {
    // Keep esbuild for minification
    cssMinify: 'esbuild',
  },
})