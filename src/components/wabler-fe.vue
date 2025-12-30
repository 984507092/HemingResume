<template>
  <div class="warbler-fe">
    <h1 class="title">开源贡献与作品</h1>

    <!-- 开源项目1 -->
    <div class="job">
      <div class="job-header">
        <div class="job-name">Ant Design - 开源贡献者</div>
        <div class="job-time">Global React Ecosystem</div>
      </div>
      <div class="skill-list">
        <span class="skill">TypeScript</span>
        <span class="skill">React</span>
        <span class="skill">UI Components</span>
      </div>
      <div class="project-info">
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">蚂蚁集团开源的全球知名 React UI 库（GitHub 90k+ Star）。</span>
        </div>
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">作为贡献者，深入参与了 <strong>Card、Watermark、Image</strong> 等核心组件的功能开发与 Bug 修复，提交并合并了多个高质量 PR。</span>
        </div>
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">Repo: <a href="https://github.com/ant-design/ant-design"
              target="_blank">ant-design/ant-design</a></span>
        </div>
      </div>
    </div>

    <!-- 开源项目2 -->
    <div class="job">
      <div class="job-header">
        <div class="job-name">Ant Design Mobile - 开源贡献者</div>
      </div>
      <div class="project-info">
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">参与移动端组件库的功能改进建议与文档完善，协助社区解决组件在特定移动环境下的交互问题。</span>
        </div>
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">Repo: <a href="https://github.com/ant-design/ant-design-mobile"
              target="_blank">ant-design/ant-design-mobile</a></span>
        </div>
      </div>
    </div>

    <!-- 开源项目3 -->
    <div class="job">
      <div class="job-header">
        <div class="job-name">DocFlow - 协同文档编辑器</div>
      </div>
      <div class="project-info">
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">基于 Tiptap 和 Next.js 的现代化协同编辑器。实现了实时数据同步与冲突解决机制，提供流畅的多人编辑体验。</span>
        </div>
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">Repo: <a href="https://github.com/xun082/DocFlow" target="_blank">xun082/DocFlow</a></span>
        </div>
      </div>
    </div>

    <!-- 开源项目4 (New) -->
    <div class="job">
      <div class="job-header">
        <div class="job-name">vue-seamless-autoscroll - 自动滚动组件</div>
      </div>
      <div class="skill-list">
        <span class="skill">Vue</span>
        <span class="skill">NPM Library</span>
        <span class="skill">Rollup</span>
      </div>
      <div class="project-info">
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">个人独立开发的 Vue 自动滚动组件，支持无缝循环滚动、鼠标悬停暂停及自定义速度。</span>
        </div>
        <div class="desc-item">
          <span class="dot">·</span>
          <span class="text">NPM: <a href="https://www.npmjs.com/package/vue-seamless-autoscroll"
              target="_blank">vue-seamless-autoscroll</a></span>
        </div>
      </div>
    </div>


    <!-- 个人博客 & 社区 -->
    <div class="social">
      <div class="social-item">
        <span class="label">个人主页/博客</span>
        <a href="https://984507092.github.io/vite_vue_blogs/" target="_blank">984507092.github.io/vite_vue_blogs/</a>
      </div>
      <div class="social-item">
        <span class="label">GitHub</span>
        <a href="https://github.com/984507092" target="_blank">github.com/984507092</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.warbler-fe {
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
    margin-bottom: 20px;
    page-break-inside: avoid;

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      .job-name {
        font-size: 16.5px;
        font-weight: 700;
        color: #2c3e50;
      }

      .job-time {
        font-size: 13px;
        color: #bdc3c7;
      }
    }

    .skill-list {
      display: flex;
      gap: 6px;
      margin-bottom: 10px;

      .skill {
        font-size: 11.5px;
        padding: 2px 8px;
        background: #f1f2f6;
        color: #747d8c;
        border-radius: 3px;
      }
    }

    .project-info {
      .desc-item {
        margin: 4px 0;
        display: flex;
        align-items: flex-start;
        line-height: 1.6;

        .dot {
          color: #3498db;
          margin-right: 8px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .text {
          flex: 1;
          color: #57606f;
          font-size: 14.5px;
          text-align: justify;
          word-break: break-all; // 针对开源项目可能有超长链接，使用更激进的自动断行

          strong {
            color: #34495e;
            background-color: rgba(52, 152, 219, 0.05);
            padding: 0 4px;
            border-radius: 3px;
            font-weight: 700;
          }

          a {
            color: #3498db;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .social {
    margin-top: 15px;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 6px;

    .social-item {
      display: flex;
      font-size: 14px;
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }

      .label {
        width: 100px;
        color: #7f8c8d;
        font-weight: 500;
      }

      a {
        color: #2c3e50;
        text-decoration: none;
        word-break: break-all;

        &:hover {
          color: #3498db;
        }
      }
    }
  }
}
</style>
