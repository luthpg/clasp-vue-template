/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteSingleFile(), tsconfigPaths()],
  build: {
    outDir: 'server/hosting',
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
