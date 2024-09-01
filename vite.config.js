import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
}