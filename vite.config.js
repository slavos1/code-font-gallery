import {
  defineConfig,
  // splitVendorChunkPlugin
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  // XXX could have used to split to self and vendor but
  // react-syntax-highlighter has dynamic and static import
  // which breaks chunking
  // splitVendorChunkPlugin()
  ],
})
