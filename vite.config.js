import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // important for Render static hosting
  build: {
    outDir: 'dist', // Render expects this
  },
  preview: {
    allowedHosts: ['*'],
  },
})
