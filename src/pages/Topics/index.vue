<template>
  <main class="topics-container">
    <div class="topics-view">
      <div class="topic-list">
        <!-- 全部话题 -->
        <div class="title">全部话题</div>
        <!-- 全部话题列表 -->
        <div class="list">
          <div class="topics-item">
            <a
              href="https://juejin.im/topic/6824710203301167112"
              title="来分享下你上班看到的好东西吧~"
              class="icon"
            >
              <img class="icon-img" src="./images/01.png" alt="" />
            </a>
            <div class="topics-content">
              <a
                href="https://juejin.im/topic/6824710203301167112"
                title="来分享下你上班看到的好东西吧~"
                >上班摸鱼</a
              >
              <span>5156 关注 · 16845 沸点</span>
              <span class="followed">
                + 关注
              </span>
            </div>
          </div>
          <div class="topics-item">
            <a
              href="https://juejin.im/topic/6824710203301167112"
              title="来分享下你上班看到的好东西吧~"
              class="icon"
            >
              <img class="icon-img" src="./images/01.png" alt="" />
            </a>
            <div class="topics-content">
              <a
                href="https://juejin.im/topic/6824710203301167112"
                title="来分享下你上班看到的好东西吧~"
                >上班摸鱼</a
              >
              <span>5156 关注 · 16845 沸点</span>
              <span class="followed">
                + 关注
              </span>
            </div>
          </div>
          <div class="topics-item">
            <a
              href="https://juejin.im/topic/6824710203301167112"
              title="来分享下你上班看到的好东西吧~"
              class="icon"
            >
              <img class="icon-img" src="./images/01.png" alt="" />
            </a>
            <div class="topics-content">
              <a
                href="https://juejin.im/topic/6824710203301167112"
                title="来分享下你上班看到的好东西吧~"
                >上班摸鱼</a
              >
              <span>5156 关注 · 16845 沸点</span>
              <span class="followed">
                + 关注
              </span>
            </div>
          </div>
          <div class="topics-item">
            <a
              href="https://juejin.im/topic/6824710203301167112"
              title="来分享下你上班看到的好东西吧~"
              class="icon"
            >
              <img class="icon-img" src="./images/01.png" alt="" />
            </a>
            <div class="topics-content">
              <a
                href="https://juejin.im/topic/6824710203301167112"
                title="来分享下你上班看到的好东西吧~"
                >上班摸鱼</a
              >
              <span>5156 关注 · 16845 沸点</span>
              <span class="followed">
                + 关注
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Topics",
};
</script>

<style lang="less" scoped>
.topics-container {
  background: #fff;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.topics-view {
  max-width: 920px;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
}

.topic-list {
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  margin-bottom: 2rem;
  .title {
    padding: 0 1.2rem;
    text-align: left;
    font-size: 2rem;
    color: #0e0e0e;
    font-weight: 600;
    margin: 2rem 0;
  }
  .list {
    display: flex;
    flex-direction: row;
    max-width: 920px;
    flex-wrap: wrap;
    .topics-item {
      display: flex;
      flex-grow: 0;
      padding: 1.5rem 1.2rem;
      .icon-img {
        position: relative;
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
        margin-right: 2%;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    .topics-content {
      color: #8a9aa9;
      width: 12rem;
      max-width: 12rem;
      /* letter-spacing: normal; */
      text-align: left;
      margin-left: 1.2rem;
      display: flex;
      flex-direction: column;
      a {
        font-weight: 600;
        color: #2e3135;
        font-size: 1.4rem;
        cursor: pointer;
      }
      span {
        padding-top: 0.5rem;
        font-size: 1.1rem;
      }
      .followed {
        color: #37c701;
        cursor: pointer;
      }
    }
  }
}
</style>
