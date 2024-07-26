<!--
 * @Date: 2024-07-19 09:52:34
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-25 14:25:59
 * @Description: 
-->
<script setup lang="ts">
</script>

<template>
    <router-view v-slot="{ Component, route  }">
        <transition mode="out-in" :name="route.meta.transition">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<style scoped>
.slide-left-enter-active, .slide-left-leave-active {  
  transition: transform 0.5s;  
}  
.slide-left-enter-from, .slide-left-leave-to {  
  transform: translateX(-100%);  
}
.slide-right-enter-active, .slide-right-leave-active {  
  transition: transform 0.5s;  
}  
.slide-right-enter-from, .slide-right-leave-to {  
  transform: translateX(100%);  
}
</style>
