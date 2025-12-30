<template>
  <div class="resume-container no-print-bg">
    <div class="resume-body">
      <personal-information></personal-information>
      <skills></skills>
      <work-experience></work-experience>
      <project-experience></project-experience>
      <warbler-fe></warbler-fe>
      <educational></educational>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "template2",
});
import personalInformation from "../../components/personal-information.vue";
import skills from "../../components/skills.vue";
import workExperience from "../../components/work-experience.vue";
import projectExperience from "../../components/project-experience.vue";
import warblerFe from "../../components/wabler-fe.vue";
import educational from "../../components/educational.vue";
</script>

<style lang="scss">
/* 全局页面样式基础调整 */
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
}

.resume-container {
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

.resume-body {
  width: 860px;
  /* A4 宽度约为 210mm，屏幕展示稍宽一点提升体验 */
  min-height: 1100px;
  /* A4 高度比例 */
  background: white;
  padding: 40px 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

/* 打印优化：核心配置 */
@media print {

  body,
  html,
  #app {
    background: white !important;
  }

  .resume-container {
    padding: 0 !important;
    background: white !important;
    display: block !important;
  }

  .resume-body {
    width: 100% !important;
    max-width: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    border-radius: 0 !important;
  }

  /* 移除强行样式覆盖，采用组件内部定义 */
  strong {
    color: inherit !important;
  }
}

/* 移除旧的辅助样式，避免冲突 */
.circle {
  display: none;
  /* 采用组件内的新 dot 样式 */
}
</style>
