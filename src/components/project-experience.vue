<template>
  <div class="project-experience">
    <h1 class="title">项目经历</h1>

    <!-- 医学科研数据库 -->
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
        <span class="skill">Docker</span>
        <span class="skill">Kubernetes</span>
      </div>

      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            高性能医学科研数据管理系统，系统支持对省内政策支持申报的医学科研项目进行项目数据汇交，并对系统沉淀的项目汇交数据进行开放共享和进一步的科研数据分析应用；
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">实现<strong>资产极致压缩</strong>：通过格式转换（<strong>OTF 转 WOFF2</strong>）、<strong>SVG</strong>
                代码压缩与分包、<strong>GIF</strong> 动态帧优化，累计降低静态资源体积超 <strong>80%</strong>。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">基于 <strong>Vite 6</strong> 实现<strong>构建与交付优化</strong>：代码分割与
                <strong>Gzip</strong>
                压缩；引入图片预加载策略（<strong>Preload/Prefetch</strong>）；通过 <strong>pnpm</strong> 优化依赖下载速度。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">编写 <strong>Dockerfile</strong> 与 <strong>Nginx</strong> 动态模板脚本，支撑
                <strong>Env + Docker + K8s</strong> 环境下的<strong>动态环境变量注入</strong>与接口转发拦截，实现云原生部署。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">控制<strong>页面、按钮、三方登录权限</strong>，实现<strong>大屏可视化</strong>，优化 <strong>chunk
                  拆分策略</strong>，避免单个 chunk 超过 <strong>500KB</strong>。</span>
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
        <span class="skill">Mobx</span>
        <span class="skill">Node.js</span>
        <span class="skill">ECharts</span>
        <span class="skill">AntV X6</span>
        <span class="skill">SSO单点登录</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            面向医疗机构的数据资产管理与知识可视化平台，聚焦<strong>医学/疾病知识图谱、表结构映射、字段标准化</strong>等场景。
            支持多家医院异构数据表的<strong>兼容与对齐</strong>，将底层数据统一抽象为标准字段模型，并通过图表与图谱联动
            呈现数据关系与流向，为数据治理、资产盘点与分析决策提供可视化支撑。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">负责前端架构设计与工程治理，搭建业务组件与图表组件体系，推动页面开发、数据联动与接口对接的规范化落地。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">重构<strong>SSO 单点登录</strong>体系，基于
                <strong>React Context API（createContext / useContext）</strong>与路由守卫实现会话管理与页面权限拦截，提升多系统间的登录一致性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">基于
                <strong>AntV X6</strong>
                实现<strong>数据血缘关系图</strong>与实体关系可视化，
                动态渲染表/字段级依赖关系，支持节点高亮、路径追踪与交互式筛选，辅助数据流向溯源。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">建设平台安全能力：可配置<strong>水印、防复制、数据预警、细粒度数据权限</strong>等功能，
                结合操作审计策略，提升敏感数据的可控性与合规性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">集成第三方 <strong>OA</strong> 系统，支持免登录单点接入与
                <strong>iframe</strong> 无缝嵌入，
                完成跨系统菜单跳转与权限透传，优化一体化门户的使用体验。</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 智能监测病种平台 -->
    <div class="project" v-if="showMoreProjects">
      <div class="project-header">
        <div class="project-name">智能监测病种平台</div>
        <div class="project-time">北京深睿医疗科技有限公司</div>
      </div>
      <div class="skill-list">
        <span class="skill">Vue 3</span>
        <span class="skill">Vue Router</span>
        <span class="skill">TypeScript</span>
        <span class="skill">Ant Design Vue</span>
        <span class="skill">Pinia</span>
        <span class="skill">ECharts</span>
        <span class="skill">Docker</span>
        <span class="skill">Kubernetes</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            面向医院与区域卫生监管的病种监测与分析平台，支持按<strong>病种、地区、时间、机构</strong>等多维度进行数据汇总与钻取，
            通过可视化看板呈现分布趋势、异常波动和结构占比，辅助管理者进行诊疗结构优化与资源调配决策。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">负责<strong>登录鉴权、角色权限、用户信息</strong>等核心模块设计与实现，
                基于路由守卫与权限指令实现页面与功能级访问控制，提升系统安全性与可维护性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">集成
                <strong>docxtemplater + docxtemplater-image-module-free</strong>，
                实现结构化报表的模板化导出与图文混排，支持按筛选条件一键生成科室/病种分析报告。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">基于
                <strong>file / file-saver / jsPDF / pdfjs-dist</strong>
                实现<strong>PDF在线预览与下载</strong>闭环，
                优化多页长文档的渲染体验，保证导出内容在不同终端的排版一致性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">构建
                <strong>ECharts</strong> 数据可视化模块，沉淀通用图表配置与渲染逻辑，
                支持折线、柱状、饼图、雷达等图表的复用与联动，提升数据洞察效率与图表可维护性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">基于
                <strong>Docker + Kubernetes</strong>
                实现<strong>动态环境变量</strong>注入与配置热更新， 结合 CI/CD
                流水线完成持续集成交付，缩短发布回归周期，提升环境一致性与稳定性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">集成<strong>单点登录（SSO）</strong>，打通门户与多系统入口，实现基于用户权限的系统间跳转与会话共享。</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 智能数据监管平台 -->
    <div class="project" v-if="showMoreProjects">
      <div class="project-header">
        <div class="project-name">智能数据监管平台</div>
        <div class="project-time">北京深睿医疗科技有限公司</div>
      </div>
      <div class="skill-list">
        <span class="skill">Vue3</span>
        <span class="skill">TypeScript</span>
        <span class="skill">Vite</span>
        <span class="skill">vxe-table</span>
        <span class="skill">ECharts</span>
        <span class="skill">Web Worker</span>
        <span class="skill">Promise/并发控制</span>
        <span class="skill">Hooks</span>
        <span class="skill">Docker</span>
        <span class="skill">Kubernetes</span>
        <span class="skill">CI/CD</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            面向医疗监管场景的综合统计与分析平台，覆盖<strong>地区、医院、科室、医生、药品</strong>等维度的数据采集、监测与可视化分析。
            通过高并发请求调度与增量渲染技术，实现大规模数据的平滑加载和交互；结合图表与表格联动，为数据稽核与趋势研判提供决策支持。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">实现<strong>并发请求调度</strong>，通过任务队列与限流策略将同时请求数限制为
                <strong>4</strong>， 在保障接口稳定性的同时提升数据拉取效率（平均列表加载时延降低约
                <strong>35%</strong>）。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">引入<strong>Web Worker</strong>
                将密集计算与数据预处理从主线程剥离，
                明显降低主线程阻塞，提升页面滚动与交互流畅度（长列表掉帧问题显著缓解）。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">二次封装 <strong>vxe-table</strong>，实现<strong>滚动加载 + 虚拟滚动</strong>，
                支持十万级数据在弱网与中端设备上的稳定渲染与交互。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">封装 <strong>ECharts</strong> 图表
                <strong>hooks</strong>（如 useChartOptions / useAutoLoad），
                实现按需加载、滚动增量渲染及复用配置，减少重复代码并提升配置一致性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">基于
                <strong>Docker + Kubernetes + CI/CD</strong> 打造交付流水线，
                支持<strong>动态环境变量</strong>注入与灰度发布，无需重建镜像即可完成配置热更新。</span>
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
        <span class="skill">Vue3</span>
        <span class="skill">Element Plus</span>
        <span class="skill">QRcode</span>
        <span class="skill">vxe-table</span>
        <span class="skill">pnpm</span>
        <span class="skill">Tinymce</span>
        <span class="skill">tiptap</span>
        <span class="skill">html2canvas</span>
        <span class="skill">vite</span>
        <span class="skill">GitLab</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            部门级核心管理系统，负责统一的身份/页面/操作权限治理；前端以大量表格、表单与树形结构的数据展示为主，支撑高频配置与运营场景。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">从 0 到 1 搭建后台基础能力，完成动态路由 <strong>addRoute</strong> 与配置化组件体系建设。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">独立负责 PC 端活动配置模块与 Mobile 活动页面的开发与维护，沉淀表单/表格复用方案。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">维护内部组件库（人员选择、文件上传、批量操作、定制下拉等），并完善使用文档与示例。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">基于自定义指令 <strong>directives</strong> 实现菜单/按钮级角色权限控制，统一权限校验逻辑。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">对接 <strong>ChatGPT</strong> 与 <strong>Midjourney</strong>，实现 AI 询问与 AI
                绘图相关功能，提升内容配置效率。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">优化后台启动性能：基于 <strong>webpack</strong> 调优启动流程，启动时间由 <strong>12s</strong> 降至
                <strong>4s</strong>。</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 育教云医疗后台管理 -->
    <div class="project">
      <div class="project-header">
        <div class="project-name">育教云医疗后台管理</div>
        <div class="project-time">杭州宝贝派健康科技</div>
      </div>
      <div class="skill-list">
        <span class="skill">React</span>
        <span class="skill">Ant Design</span>
        <span class="skill">TypeScript</span>
        <span class="skill">webpack</span>
        <span class="skill">pnpm</span>
        <span class="skill">husky</span>
        <span class="skill">dumi</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            面向医院场景的业务后台，支撑医生/护士对婴儿档案、测评与随访数据的登记与管理，要求高稳定性与清晰的操作流程。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">使用 <strong>pnpm</strong> 管理多包与基础能力封装，提升依赖安装与构建效率。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">将发版流程接入 CI：自动化测试 + 线上站点发布 + npm 发包，形成标准化交付。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">基于 <strong>husky</strong> 落地 git hooks，在提交前执行格式化、检查与单测，保障代码质量。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">利用 TypeScript 类型定义，提升 Hooks 的可靠性；配合 <strong>gulp</strong> 构建完善的 d.ts。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">使用 <strong>dumi</strong> 搭建组件/Hook 文档站，提供完整 demo 与入参/出参说明。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">通过 <strong>gulp</strong> 同构构建同时产出 CommonJS/ESM，配合 <strong>webpack</strong> 提供 UMD
                版本。</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 云小派（微信小程序/支付宝小程序） -->
    <div class="project">
      <div class="project-header">
        <div class="project-name">云小派（微信小程序/支付宝小程序）</div>
        <div class="project-time">杭州宝贝派健康科技</div>
      </div>
      <div class="skill-list">
        <span class="skill">原生开发</span>
        <span class="skill">qrcode</span>
        <span class="skill">canvas</span>
        <span class="skill">uniapp</span>
        <span class="skill">uView</span>
        <span class="skill">pnpm</span>
        <span class="skill">oss</span>
        <span class="skill">GitLab</span>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            面向孕妈与宝妈群体的小程序产品，负责项目从搭建到持续迭代与维护，并沉淀公共组件能力，保障高频营销与运营活动的快速上线。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">从 0 到 1 完成核心功能：注册登录、无感刷新、个人信息等模块搭建与联调。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">性能优化：页面平均响应由 <strong>2s</strong> 降至 <strong>500ms</strong>，明显提升流畅度与稳定性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">封装 <strong>popup/模态框/手风琴/分享海报/倒计时/input 双向绑定</strong> 等通用组件，提升复用效率。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">负责小程序申请与备案；配置 <strong>AppID/密钥</strong> 等环境变量并发布上线。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">实现 Token 过期无感静默登录与用户/平台/机构三方角色校验，保证会话安全与一致性。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">原生 <strong>Canvas</strong> 封装分享海报与二维码功能，兼容微信/支付宝在 Android/iOS 的差异。</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 更多项目 -->
    <div class="project more-projects">
      <div class="project-header">
        <div class="project-name">研美管理、研美活动</div>
        <div class="project-time">2022 ~ 2023</div>
      </div>
      <div class="project-info">
        <div class="info-item">
          <span class="label">项目简介</span>
          <div class="content main-text">
            <strong>研美管理</strong>：健身房活动配置系统，对运营和门店的活动进行管理，配置不同门店、不同城市生成不同的活动，并进行数据统计。
            <strong>研美活动</strong>：美容院活动推广项目，与微信相关联的推广项目，使用背景音乐、自动滚动、图片下载、弹幕等功能。
          </div>
        </div>
        <div class="info-item">
          <span class="label">技术亮点</span>
          <div class="content list-text">
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">通过 <strong>vue-cli</strong>，结合<strong>eslint + prettier + husky + lint-staged +
                  commitlint</strong> 搭建现代化前端工程，通过 css 变量配置一键换肤。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">通过 <strong>ECharts</strong> 实现数据可视化以及地图部分的需求；通过 <strong>WebSocket</strong>
                实时展示现场的告警信息。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">通过 <strong>Vue-Draggable</strong> 实现表单设计器的拖拽功能；通过 <strong>VitePress</strong>
                搭建运营帮助文档。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">使用 <strong>vue-seamless-scroll</strong> 插件解决自动滚动问题；使用
                <strong>uni.createInnerAudioContext()</strong> 解决背景音乐问题。</span>
            </div>
            <div class="list-item">
              <span class="dot">·</span>
              <span class="text">使用 <strong>微信JSDK</strong> 解决微信分享和微信支付问题；使用 <strong>vue-baberrage</strong>
                解决页面弹幕问题。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const showMoreProjects = ref(false);
</script>

<style lang="scss" scoped>
  .project-experience {
    padding-top: 28px;

    .title {
      font-size: 24px;
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
          font-size: 19.5px;
          font-weight: 700;
          color: #2c3e50;
        }

        .project-time {
          font-size: 17px;
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
          background-color: rgba(2, 2, 3, 0.08);
          border: 1px solid rgba(52, 152, 219, 0.12);
          color: #3498db;
          border-radius: 4px;
          font-size: 15px;
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
            font-size: 17.5px;

            &::after {
              content: '：';
            }
          }

          .content {
            flex: 1;
            color: #57606f;
            font-size: 17.5px;
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
                  font-size: 16.5px;
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
      margin-top: 20px;
    }

    .project-header {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }
</style>
