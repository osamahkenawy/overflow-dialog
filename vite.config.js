import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true, // Automatically imports Vuetify components
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Setting alias for '@' to 'src' folder
    },
  },
});
