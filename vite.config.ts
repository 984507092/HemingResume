import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// GitHub Pages 部署在子路径 /HemingResume/，构建时需设置 base，否则资源 404
const base = process.env.BASE_PATH ?? './'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 路径别名
    },
  },
})
