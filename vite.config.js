import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/loansimplify/",
  esbuild: {
    loader: 'jsx',
    include: [/src\/.*\.[jt]sx?$/], // handles .js, .jsx, .ts, .tsx
  }
})
