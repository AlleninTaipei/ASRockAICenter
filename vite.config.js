import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 假設 GitHub Pages 網址為 https://username.github.io/repo-name/
  // 請將 base 設定為 './' 即可相容多數環境
  base: './', 
})