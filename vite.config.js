import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true
    }
  },

  optimizeDeps: {
    exclude: ['three', '@react-three/fiber', '@react-three/drei']
  },

  build: {
    target: 'esnext',
    minify: false, // temporarily disable minification to save memory
    sourcemap: false,
    modulePreload: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 0,

    rollupOptions: {
      output: {
        // Default chunking
      }
    },

    commonjsOptions: {
      transformMixedEsModules: false
    }
  }
})
