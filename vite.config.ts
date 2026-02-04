import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// CI 部署时通过 env BASE_PATH 传入，如 /HemingResume/；本地默认相对路径
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
