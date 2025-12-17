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
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    modulePreload: false,
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 0,

    rollupOptions: {
      maxParallelFileOps: 2,
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-vendor';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('framer-motion')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        }
      }
    },

    commonjsOptions: {
      transformMixedEsModules: false
    }
  }
})
