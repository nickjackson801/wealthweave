import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/wealthweave/',  // Make sure this matches exactly
  plugins: [react()]
}) 