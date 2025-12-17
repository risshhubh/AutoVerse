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
            // Ultra-aggressive splitting for memory efficiency
            if (id.includes('three')) {
              if (id.includes('core')) return 'three-core'
              if (id.includes('examples') || id.includes('jsm')) return 'three-extras'
              return 'three-misc'
            }
            if (id.includes('@react-three/fiber')) return 'r3f-core'
            if (id.includes('@react-three/drei')) return 'r3f-drei'
            if (id.includes('framer-motion')) return 'framer'
            if (id.includes('gsap')) return 'gsap'
            if (id.includes('lenis')) return 'lenis'
            if (id.includes('react') && id.includes('dom')) return 'react-dom'
            if (id.includes('react')) return 'react-core'
            if (id.includes('lucide-react')) return 'icons'
            return 'vendor'
          }
        }
      }
    },

    commonjsOptions: {
      transformMixedEsModules: false
    }
  }
})
