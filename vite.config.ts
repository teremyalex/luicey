import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/luicey',
  build: {
    outDir: 'C:\\Users\\Teremy Alex\\Desktop\\juice\\build',
    rollupOptions: {
      output: {
        entryFileNames: 'main.js', // Fő JavaScript fájl neve
        chunkFileNames: '[name].js', // Darabok neve
        assetFileNames: 'assets/[name][extname]' // Az assets mappa visszaállítása
      }
    }
  }
})
