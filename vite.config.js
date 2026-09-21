import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative URLs work both on the repository Pages path (/page/) and on the
// custom domain root (https://cheauncey.me/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
