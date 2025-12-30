<template>
  <div id="app-root">
    <keep-alive>
      <component :is="currentComponent" v-if="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import dynamicImport from "./utils/dynamicImport";

const selectedTemplate = ref("template1");
const currentComponent = computed(() => {
  return dynamicImport(selectedTemplate.value);
});
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
