<template>
  <div class="personal-information">
    <div class="header">
      <h1 class="name">李生澳</h1>
      <div class="job-title">前端开发工程师</div>
    </div>
    <div class="contact-info">
      <span>男 · 25岁 · 杭州</span>
      <span class="divider">|</span>
      <span>手机: 19958914314</span>
      <span class="divider">|</span>
      <span>微信: lsa000226</span>
      <span class="divider">|</span>
      <span>邮箱: 984507092@qq.com</span>
    </div>
    <div class="summary">
      拥有丰富的
      <strong>Vue、React、TypeScript、Node、JavaScript、AI</strong>
      实践经验，积极参与行业内优秀前端技术框架开源共建(<strong>Ant Design 贡献者</strong>)。对业界新技术保持高度敏感，乐于钻研前沿技术与框架源码，具备较强的技术沉淀能力与业务敏锐度。
    </div>
  </div>
</template>

<style lang="scss" scoped>
.personal-information {
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;

  .header {
    margin-bottom: 12px;

    .name {
      font-size: 34px;
      margin: 0;
      color: #2c3e50;
      letter-spacing: 2px;
      font-weight: 800;
    }

    .job-title {
      font-size: 20px;
      color: #3498db;
      font-weight: 500;
      margin-top: 4px;
    }
  }

  .contact-info {
    font-size: 17px;
    color: #606266;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    .divider {
      color: #dcdfe6;
    }
  }

  .summary {
    max-width: 760px;
    margin: 0 auto;
    font-size: 17px;
    color: #57606f;
    line-height: 1.8;
    text-align: justify;
    background-color: #f9f9f9;
    padding: 12px 20px;
    border-radius: 4px;

    strong {
      color: #34495e;
      background-color: rgba(52, 152, 219, 0.05);
      padding: 0 4px;
      border-radius: 3px;
      font-weight: 700;
    }
  }
}

@media print {
  .personal-information {
    .summary {
      background-color: transparent;
      padding: 0;
      border: none;
    }
  }
}
</style>
