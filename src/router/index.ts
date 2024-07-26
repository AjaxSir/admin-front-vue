/*
 * @Date: 2024-07-19 10:49:32
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-25 14:26:27
 * @Description: 
 */

import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
const routes:RouteRecordRaw[] = [
    {
        name: "start",
        path: '/',
        component: () => import('@/pages/Start.vue'),
        meta: { transition: 'slide-right' },
    },
    {
        name: "room",
        path: '/room',
        component: () => import('@/pages/Room.vue'),
        meta: { transition: 'slide-right' },
    },
    {
        name: "animate",
        path: '/animate',
        component: () => import('@/pages/Animate.vue'),
        meta: { transition: 'slide-right' },
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})