import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ShAgamyPortfolio/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules'],
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
