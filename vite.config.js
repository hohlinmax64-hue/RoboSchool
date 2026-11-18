import { defineConfig } from 'vite'

export default defineConfig({
  base: '/RoboSchool/',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    devSourcemap: true,
  },
})
