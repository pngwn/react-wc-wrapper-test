import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { build } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    cssCodeSplit: false
  }
})
