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
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      maxParallelFileOps: 2,
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three') && !id.includes('examples') && !id.includes('jsm')) {
              return 'three-core'
            }
            if (id.includes('three') && (id.includes('examples') || id.includes('jsm'))) {
              return 'three-extras'
            }
            if (id.includes('@react-three')) {
              return 'react-three'
            }
            if (id.includes('framer-motion') || id.includes('gsap') || id.includes('lenis')) {
              return 'animations'
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            return 'vendor'
          }
        }
      }
    },

    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
