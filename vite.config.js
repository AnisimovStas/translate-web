import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/translate/',  // Устанавливаем базовый путь

  build:{
    assetsDir: 'assets',  // Указываем директорию для статических файлов, например, favicon.ico
    outDir: './home/feral/opt/translate/front',
},
  preview:{
    allowedHosts: ['feral.servebeer.com', 'localhost', '127.0.0.1']

  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
