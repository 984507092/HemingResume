<template>
  <div class="work-experience">
    <h1 class="title">工作经历</h1>

    <!-- 北京深睿医疗科技有限公司 -->
    <div class="job">
      <div class="job-header">
        <div class="job-name">北京深睿医疗科技有限公司</div>
        <div class="job-time">2024.12 ~ 2025.10</div>
      </div>
      <div class="job-position">前端开发工程师</div>
      <div class="job-description">
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">从 0 到 1 搭建基础设施，完成 <strong>Vue Router、CI/CD 流水线、Docker 容器化、Kubernetes 部署</strong>
            等工程化建设，规范开发流程并提升交付效率。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">重构公司老项目的 <strong>单点登录（SSO）</strong> 系统，解决跨系统兼容性问题，统一会话与权限校验，显著提升用户体验与系统稳定性。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">基于 <strong>AntV X6</strong> 实现 ER
            图可视化，支持按数据模型动态生成页面布局与样式，提供节点高亮、路径追踪等交互，辅助数据关系理解与溯源。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">对开源框架 <strong>Dify</strong> 进行二次开发，落地 <strong>AI 智能问答</strong>
            与对话模块，支持知识库检索、意图识别与多轮会话，提升业务协作效率。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">建设 <strong>ECharts</strong> 可视化体系，沉淀可复用配置与组件，覆盖多种复杂图表场景，支持联动与按需加载，保障系统性能与设计一致性。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">主导全链路性能优化：将包体积从 <strong>93MB</strong> 压缩至 <strong>23.4MB</strong>；通过 OTF 字体转 WOFF2、SVG 分包与
            GIF 帧率优化，显著提升资源加载效率。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">重构成工程基建：引入 <strong>pnpm</strong> 优化依赖链；优化 CI/CD 打包策略，将流水线构建耗时从 <strong>22 分钟</strong> 降低至
            <strong>3 分钟</strong> 内。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">落地云原生部署方案：编写 Dockerfile 与 Nginx 模版，实现 <strong>Env + Docker + K8s</strong>
            架构下的动态环境变量注入与网关转发，增强环境迁移灵活性。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">主导多模态资产平台调优：通过代码审计与无效渲染治理，首屏加载由 4s 缩短至 <strong>1.5s</strong>，双倍提升核心页面响应速度。</span>
        </div>

      </div>
    </div>

    <!-- 杭州宝贝派健康科技 -->
    <div class="job">
      <div class="job-header">
        <div class="job-name">杭州宝贝派健康科技</div>
        <div class="job-time">2023.02 ~ 2024.11</div>
      </div>
      <div class="job-position">前端开发工程师</div>
      <div class="job-description">
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">主导多端项目的架构与交付，涵盖 Web 管理后台与 <strong>微信/支付宝小程序</strong>；完善代码规范与复用策略，提升团队开发效率。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">维护与扩展内部通用组件库，沉淀详细文档与示例，显著降低业务开发成本。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">推进跨端适配与兼容性治理，基于 <strong>uni-app / Taro</strong> 实践小程序工程化，成功交付多款高质量小程序产品。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">优化工程性能：由 <strong>webpack3</strong> 升级至 <strong>4</strong>，显著提升构建速度并优化包体大小；引入
            <strong>html2canvas</strong> 实现复杂的 HTML 转画布功能并统一兼容策略。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">落地 <strong>AI 赋能开发</strong>：深入应用 <strong>ChatGPT</strong> 等大模型辅助研发，提升代码产出效率与文档质量。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">封装并应用 <strong>TipTap</strong> 富文本编辑器，完善复杂编辑场景能力，优化内容生产体验。</span>
        </div>
      </div>
    </div>

    <!-- 杭州风尚科技 -->
    <div class="job">
      <div class="job-header">
        <div class="job-name">杭州风尚科技</div>
        <div class="job-time">2022.09 ~ 2023.02</div>
      </div>
      <div class="job-position">前端开发工程师 / 团队负责人</div>
      <div class="job-description">
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">担任 3 人前端团队负责人，主导整体前端选型、任务分配及工程基建。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">负责旧项目迭代与新项目搭建，制定团队开发规范，通过 <strong>Code Review</strong> 确保代码质量。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">采用 <strong>crypto-js</strong> 实现 <strong>AES_CBC 加密算法</strong>，增强系统数据安全性；精通微信生态开发，解决复杂的授权与
            <strong>JSDK</strong> 集成问题。</span>
        </div>
        <div class="desc-item">
          <span class="circle">·</span>
          <span class="text">结合 <strong>Electron</strong> 框架实现 Web 应用桌面化，为用户提供跨平台的一致性流畅体验。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.work-experience {
  margin-top: 28px;
  page-break-inside: avoid;

  .title {
    font-size: 22px;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid #3498db;
    color: #2c3e50;
    font-weight: 600;
  }

  .job {
    margin-bottom: 24px;
    page-break-inside: avoid;

    &:last-child {
      margin-bottom: 0;
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;

      .job-name {
        font-size: 17px;
        font-weight: 700;
        color: #2c3e50;
      }

      .job-time {
        font-size: 14px;
        color: #7f8c8d;
        font-family: 'Consolas', 'Monaco', monospace;
      }
    }

    .job-position {
      font-size: 15px;
      color: #3498db;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .job-description {
      .desc-item {
        margin: 6px 0;
        display: flex;
        align-items: flex-start;
        line-height: 1.6;

        .circle {
          color: #3498db;
          margin-right: 8px;
          font-weight: bold;
          flex-shrink: 0;
          line-height: 1.6;
        }

        .text {
          flex: 1;
          color: #57606f;
          font-size: 14.5px;
          text-align: justify;
          word-break: break-word;
          overflow-wrap: break-word;

          strong {
            color: #34495e;
            background-color: rgba(52, 152, 219, 0.05);
            padding: 0 4px;
            border-radius: 3px;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>