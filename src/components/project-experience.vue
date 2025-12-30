<template>
  <div class="project-experience">
    <h1 class="title">项目经历</h1>

    <!-- 医学科研数据库 (New) -->
    <div class="project">
      <div class="project-header">
        <div class="project-name">医学科研数据库</div>
        <div class="project-time">北京深睿医疗科技有限公司</div>
      </div>
      <div class="skill-list">
        <span class="skill">React 18</span>
        <span class="skill">TypeScript</span>
        <span class="skill">Vite 6</span>
        <span class="skill">Ant Design</span>
        <span class="skill">Zustand</span>
        <span class="skill">vite-plugin-svg-icons</span>
        <span class="skill">Docker + K8s</span>
      </div>

      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            高性能医学科研数据管理系统。通过全链路优化将包体积从 93MB 压缩至
            23.4MB，流水线打包时间从 22 分钟大幅降至 3 分钟内。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                ><strong>资产极致压缩</strong>：通过格式转换（OTF 转 WOFF2）、SVG
                代码压缩与分包、GIF 动态帧优化，累计降低静态资源体积超 80%。</span
              >
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                ><strong>构建与交付优化</strong>：基于 Vite 6 实现代码分割与 Gzip
                压缩；引入图片预加载策略（Preload/Prefetch）；通过 pnpm 优化依赖下载速度。</span
              >
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                ><strong>云原生部署</strong>：编写 Dockerfile 与 Nginx 动态模板脚本，支撑
                <strong>Env + Docker + K8s</strong> 环境下的动态环境变量注入与接口转发拦截。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 多模态数据资产管理平台 -->
    <div class="project">
      <div class="project-header">
        <div class="project-name">多模态数据资产管理平台</div>
        <div class="project-time">北京深睿医疗科技有限公司</div>
      </div>
      <div class="skill-list">
        <span class="skill">React</span>
        <span class="skill">TypeScript</span>
        <span class="skill">Ant Design</span>
        <span class="skill">AntV X6</span>
        <span class="skill">Mobx</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            面向医疗机构的数据资产管理与知识可视化平台。支持异构数据表兼容，通过图谱联动呈现数据关系。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                ><strong>性能调优</strong
                >：主导全站性能优化，通过代码审计、懒加载与资源优化，首屏加载时间由 4s 降低至
                <strong>1.5s</strong>，无效重绘减少 50% 以上。</span
              >
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                >基于
                <strong>AntV X6</strong>
                实现数据血缘关系图，动态渲染表/字段级依赖关系，支持交互式溯源。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 智能监测病种平台 -->
    <div class="project">
      <div class="project-header">
        <div class="project-name">智能监测病种平台</div>
        <div class="project-time">北京深睿医疗科技有限公司</div>
      </div>
      <div class="skill-list">
        <span class="skill">Vue 3</span>
        <span class="skill">Ant Design Vue</span>
        <span class="skill">docxtemplater</span>
        <span class="skill">K8s</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            面向监管的病种分析平台，支持多维度数据钻取与可视化看板展示，优化诊疗结构决策。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                >集成 <strong>docxtemplater</strong> 插件，实现了结构化报表的模板化导出与 PDF
                在线预览闭环。</span
              >
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                >构建
                <strong>ECharts 可视化体系</strong
                >，沉淀通用图表配置库，实现复杂数据的联动分析。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 智能数据监管平台 -->
    <div class="project">
      <div class="project-header">
        <div class="project-name">智能数据监管平台</div>
        <div class="project-time">北京深睿医疗科技有限公司</div>
      </div>
      <div class="skill-list">
        <span class="skill">Vite</span>
        <span class="skill">vxe-table</span>
        <span class="skill">Web Worker</span>
        <span class="skill">并发控制</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            高并发统计分析平台。覆盖多维度数据采集与可视化，通过 Worker
            线程保障大规模数据的平滑加载。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                >实现 <strong>并发请求调度器</strong>，通过队列与限流策略保障接口稳定性，时延降低约
                35%。</span
              >
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                >引入
                <strong>Web Worker</strong>
                剥离密集计算，显著缓解长列表在弱网环境下的掉帧问题。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 妈妈派管理系统 -->
    <div class="project">
      <div class="project-header">
        <div class="project-name">妈妈派管理系统</div>
        <div class="project-time">杭州宝贝派健康科技</div>
      </div>
      <div class="skill-list">
        <span class="skill">Vue 3</span>
        <span class="skill">Element Plus</span>
        <span class="skill">addRoute</span>
        <span class="skill">ChatGPT API</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            部门级核心配置系统。负责统一的权限治理，通过大量配置化组件支撑高频运营。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                >基于自定义指令实现按钮级权限控制；集成 ChatGPT 实现 AI 内容辅助生产。</span
              >
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text"
                >基于 <strong>webpack</strong> 调优，将后台启动时间从 12s 降低至 4s。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 更多项目 -->
    <div class="project more-projects">
      <div class="project-header">
        <div class="project-name">育教云、研美管理、研美活动等项目</div>
        <div class="project-time">2022 ~ 2023</div>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">关键产出</span>
          <div class="content main-text">
            使用 pnpm 管理多包架构；基于 WebSocket 实现实时告警展示；通过 Vue-Draggable
            实现可视化表单设计器；针对复杂微信生态提供支付、分享与兼容性落地方案。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .project-experience {
    margin-top: 28px;

    .title {
      font-size: 22px;
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 2px solid #3498db;
      color: #2c3e50;
      font-weight: 600;
    }

    .project {
      margin-bottom: 25px;
      page-break-inside: auto;

      .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        .project-name {
          font-size: 16.5px;
          font-weight: 700;
          color: #2c3e50;
        }

        .project-time {
          font-size: 13px;
          color: #95a5a6;
        }
      }

      .skill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;

        .skill {
          padding: 2px 8px;
          background-color: rgba(52, 152, 219, 0.08);
          border: 1px solid rgba(52, 152, 219, 0.12);
          color: #3498db;
          border-radius: 4px;
          font-size: 11.5px;
          font-weight: 500;
        }
      }

      .project-info {
        .info-item {
          display: flex;
          margin-bottom: 6px;

          .label {
            min-width: 70px;
            font-weight: 600;
            color: #34495e;
            font-size: 13.5px;

            &::after {
              content: '：';
            }
          }

          .content {
            flex: 1;
            color: #57606f;
            font-size: 14px;
            line-height: 1.6;
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

            &.list-text {
              .list-item {
                display: flex;
                align-items: flex-start;
                margin-bottom: 4px;

                &:last-child {
                  margin-bottom: 0;
                }

                .dot {
                  color: #3498db;
                  margin-right: 6px;
                  font-weight: bold;
                  flex-shrink: 0;
                }

                .text {
                  flex: 1;
                }
              }
            }
          }
        }
      }
    }

    .more-projects {
      border-top: 1px dashed #eee;
      padding-top: 15px;
    }
  }
  
  @media print {
    .project {
      break-inside: avoid;
      page-break-inside: avoid;
    }
    
    .project-header {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }
</style>
