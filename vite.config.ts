/*
 * @Date: 2024-07-19 09:52:34
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-19 13:45:48
 * @Description: 
 */
import  AutoImport  from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      dts: "src/types/auto-imports.d.ts",
      dirs: ['src/**'],
      include:[
        './src/**/*.vue',
        './src/**/*.ts',
      ],
      imports: ['vue', 'vue-router']
    })],
  resolve: {
    alias:  {
      '@': '/src',
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@utils': '/src/utils',
      '@services': '/src/services'
    }
  }
})
