import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// GitHub Pages 项目站点的 URL 为 https://<user>.github.io/<repo>/，必须使用绝对 base 否则会白屏
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
  build: {
    outDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录
    rollupOptions: {
      output: {
        // 确保资源路径正确
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/[name].[hash].[ext]'
          }
          return 'assets/[name].[hash].[ext]'
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})
