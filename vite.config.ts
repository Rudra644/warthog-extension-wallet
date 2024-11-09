import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/manifest.json', dest: '.' },
        { src: 'src/pages/Popup/index.html', dest: '.' },
        { src: 'src/pages/Welcome/index.html', dest: '.' },
        { src: 'src/pages/Welcome/Create/index.html', dest: '.' }, // Add Create page
      ],
    }),
  ],
  resolve: {
    alias: {
      '@services': resolve(__dirname, './src/services'),
      '@db': resolve(__dirname, './src/db'),
      '@pages': resolve(__dirname, './src/pages'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/pages/Popup/index.html'),
        welcome: resolve(__dirname, 'src/pages/Welcome/index.html'),
        create: resolve(__dirname, 'src/pages/Welcome/Create/index.html'),
        background: resolve(__dirname, 'src/background.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
