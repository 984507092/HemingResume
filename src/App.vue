<template>
  <div id="app-root">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

// 确保路由器已初始化
const router = useRouter();
const route = useRoute();
</script>

<style lang="scss">
/* 全局基础配置 */
#app-root {
  width: 100%;
  min-height: 100vh;
}

@media print {
  #app-root {
    background: white;
  }
}
</style>
