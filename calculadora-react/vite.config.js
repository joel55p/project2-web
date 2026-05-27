import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/24253/calculadora/' : '/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
    globals: true
  }
}))