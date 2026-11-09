import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes it work on any GitHub Pages path (user site or project site)
export default defineConfig({ plugins: [react()], base: './' })
