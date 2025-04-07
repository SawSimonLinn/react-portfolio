// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.DEPLOY_TARGET === 'GH';

export default defineConfig({
  base: isGitHubPages ? '/react-portfolio/' : '/',
  plugins: [react()],
});
