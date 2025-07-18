// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Al-Shifa/', // 👈 must match your repo name exactly!
  plugins: [react()],
});
