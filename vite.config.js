import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],

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
    minify: 'esbuild',
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
