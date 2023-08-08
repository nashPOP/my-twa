import { fileURLToPath, URL } from 'node:url'
const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  base:"/my-twa/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),

    }
  },
  server: {
    port: 8080,
    // hot: true
  }
})
