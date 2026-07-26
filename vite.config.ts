import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base keeps the built app working from a subdirectory or a file server,
  // which is how shelter lab machines usually receive it.
  base: './',
});
