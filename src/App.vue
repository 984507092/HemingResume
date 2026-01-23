<template>
  <div id="app-root">
    <router-view />
  </div>
</template>

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
