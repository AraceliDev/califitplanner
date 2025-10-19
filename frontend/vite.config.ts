import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'califitplanner.com',
      'www.califitplanner.com',
      'localhost'
    ]
  },
  cacheDir: '.vite-cache',
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
