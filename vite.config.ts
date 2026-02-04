import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// CI 部署时通过 env BASE_PATH 传入，如 /HemingResume/；本地默认相对路径
const envBase = process.env.BASE_PATH
// 确保 base 以 / 结尾（Vite 要求）
const base = envBase ? (envBase.endsWith('/') ? envBase : `${envBase}/`) : './'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
