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
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },

  build: {
    target: 'esnext',
    minify: false,
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    assetsInlineLimit: 0,

    rollupOptions: {
      maxParallelFileOps: 1,
      output: {
        // Default chunking
      }
    }
  }
})
