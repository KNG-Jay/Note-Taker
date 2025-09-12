import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import mkcert from 'vite-plugin-mkcert'
import fs from 'fs';
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    svgr()
  ],
  server: {
    port: 5173,
    open: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'certs/privateKey.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'certs/certificate.pem')), 
    },

  },
});
