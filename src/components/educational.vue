<template>
  <div class="educational">
    <h1 class="title">教育经历</h1>
    <div class="edu-list">
      <div class="edu-item">
        <div class="main-info">
          <span class="school">中国计量大学</span>
          <span class="degree">本科</span>
        </div>
        <div class="sub-info">
          <span class="major">计算机科学与技术</span>
          <span class="time">2024.09 ~ 2026.06</span>
        </div>
      </div>
      <div class="edu-item">
        <div class="main-info">
          <span class="school">南阳农业职业学院</span>
          <span class="degree">大专</span>
        </div>
        <div class="sub-info">
          <span class="major">软件技术应用（前端开发）</span>
          <span class="time">2020.09 ~ 2023.06</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.educational {
  margin-top: 28px;
  page-break-inside: avoid;

  .title {
    font-size: 22px;
    margin-bottom: 18px;
    padding-bottom: 8px;
    border-bottom: 2px solid #3498db;
    color: #2c3e50;
    font-weight: 600;
  }

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .edu-item {
    display: flex;
    flex-direction: column;

    .main-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;

      .school {
        font-size: 16.5px;
        font-weight: 700;
        color: #2c3e50;
      }

      .degree {
        font-size: 14px;
        color: #3498db;
        font-weight: 600;
        padding: 2px 8px;
        background: rgba(52, 152, 219, 0.1);
        border-radius: 4px;
      }
    }


    .sub-info {
      display: flex;
      justify-content: space-between;
      font-size: 14.5px;
      color: #7f8c8d;

      .time {
        font-family: 'Consolas', monospace;
      }
    }
  }
}
</style>
