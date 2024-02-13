import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@fortawesome')) {
            return 'fortawesome-' + (id.split('@fortawesome/')[1]).split('/')[0];
          }
        }
      }
    }
  }
})
