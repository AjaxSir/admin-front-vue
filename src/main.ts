/*
 * @Date: 2024-07-19 09:52:34
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-19 11:14:13
 * @Description: 
 */
import { createApp } from 'vue'
import '@/assets/style/reset.css'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
createApp(App).use(createPinia()).use(router).mount('#app')
