import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@imgs': path.resolve(__dirname, './src/assets/imgs'),
      '@hooks': path.resolve(__dirname, './src/assets/hooks'),
    },
  },
})
