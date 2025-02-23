import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/wealthweave/',  // Replace 'wealthweave' with your repository name
  plugins: [react()]
}) 