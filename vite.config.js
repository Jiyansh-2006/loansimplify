import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Hackathon/",
  esbuild: {
    loader: 'jsx',
    include: [/src\/.*\.[jt]sx?$/], // handles .js, .jsx, .ts, .tsx
  }
})
