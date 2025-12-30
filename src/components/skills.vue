<template>
  <div class="skills">
    <h1 class="title">专业技能</h1>
    <div class="skill-groups">
      <!-- 核心技术栈 -->
      <div class="skill-group">
        <h2 class="group-title">核心技术栈</h2>
        <div class="skill-content">
          <p>
            <span class="label">框架与库</span>：精通 <strong>Vue 2/3</strong> 全家桶 (<strong>Vue Router, Pinia,
              VitePress</strong>)；熟练使用 <strong>React, Next.js</strong> 及其生态 (<strong>Hooks, Router, ahooks, Zustand,
              MobX</strong>)。
          </p>
          <p>
            <span class="label">语言与基建</span>：深厚的 <strong>ES6+、TypeScript</strong>
            功底，熟悉项目接口数据返回的<strong>类型定义</strong>与全链路类型安全；熟练使用
            <strong>Vite、Webpack、Rollup</strong> 进行构建配置与性能调优。
          </p>
          <p>
            <span class="label">跨端开发</span>：熟练使用
            <strong>uni-app、Taro</strong> 跨端方案；掌握
            <strong>微信/支付宝小程序原生</strong> 开发；具备
            <strong>Electron</strong> 桌面端落地经验。
          </p>
          <p>
            <span class="label">数据可视化</span>：精通
            <strong>ECharts、Canvas、AntV (G2/X6/G6)</strong>，拥有丰富的大屏交互与复杂拓扑图开发经验；掌握基于
            <strong>ResizeObserver</strong> 的大屏自适应适配方案。
          </p>
        </div>
      </div>

      <!-- 工程与协作 -->
      <div class="skill-group">
        <h2 class="group-title">工程化与性能</h2>
        <div class="skill-content">
          <p>
            <span class="label">工程化建设</span>：熟悉 <strong>Git</strong> 协作与
            <strong>CI/CD</strong> 流水线；具备 <strong>Monorepo</strong> (pnpm Workspaces,
            Turborepo/Lerna) 管理经验；掌握 <strong>Docker, K8s</strong> 部署与
            <strong>Nginx</strong> 动态配置。
          </p>

          <p>
            <span class="label">性能调优</span>：掌握
            <strong>代码/打包/资源全链路优化</strong>；具备
            <strong>LCP(4s->1.5s)</strong> 优化、<strong>渲染重绘(减少50%)</strong>
            等实际业务落地经验。
          </p>
          <p>
            <span class="label">样式与设计</span>：熟练使用
            <strong>SCSS, UnoCSS/Tailwind</strong>；精通
            <strong>Figma/Axure</strong> 对接，能深度理解并还原设计意图。
          </p>
        </div>
      </div>

      <!-- 鸿蒙与设计 -->
      <div class="skill-group">
        <h2 class="group-title">拓展领域</h2>
        <div class="skill-content">
          <p>
            <span class="label">鸿蒙生态</span>：具备 <strong>ArkTS</strong> 与
            <strong>HarmonyOS NEXT</strong> 实际项目实践经验。
          </p>
          <p>
            <span class="label">AI 赋能</span>：深入应用主流 LLM (<strong>ChatGPT, DeepSeek</strong>) API 与 <strong>MCP</strong>
            协议；熟练编写
            <strong>Agent Rules</strong> 辅助日常编码、自动化工具开发及复杂问题排查。
          </p>

          <p>
            <span class="label">后端技术</span>：熟悉 <strong>Node.js</strong> 常用框架 (<strong>Nest, Koa, Express</strong>)；掌握
            <strong>MySQL, Redis</strong> 的基本应用。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  padding-top: 5px;
  page-break-inside: auto;

  .title {
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 8px;
    border-bottom: 2px solid #3498db;
    color: #2c3e50;
    font-weight: 600;
  }

  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .skill-group {
    .group-title {
      font-size: 18px;
      color: #3498db;
      margin: 0 0 8px 0;
      font-weight: 600;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        width: 4px;
        height: 16px;
        background-color: #3498db;
        margin-right: 8px;
        border-radius: 2px;
      }
    }

    .skill-content {
      padding-left: 12px;

      p {
        margin: 4px 0;
        font-size: 16px;
        color: #57606f;
        line-height: 1.7;

        .label {
          color: #2c3e50;
          font-weight: 600;
        }

        strong {
          color: #3498db;
          /* 使用统一蓝色高亮技术栈 */
          font-weight: 700;
          padding: 0 2px;
          margin: 0;
        }
      }
    }
  }
}

@media print {
  .skill-group {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-top: 20px;

    strong {
      color: #3498db !important;
      /* 打印时确保清晰 */
      border-bottom: 1px solid rgba(52, 152, 219, 0.2);
      /* 增加微妙的下划线强调 */
    }
  }
}
</style>
