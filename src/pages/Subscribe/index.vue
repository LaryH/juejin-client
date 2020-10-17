<template>
  <div class="view subscribe-view">
    <nav class="view-nav">
      <ul class="nav-list">
        <li class="nav-item nav-list-first">
          <a href="JavaScript" class="nav-item-first">已关注标签</a>
        </li>
        <li class="nav-item nav-item-t">
          <a href="JavaScript" class="nav-item-second">全部标签</a>
        </li>
      </ul>
    </nav>
    <div class="view subscribe-subscribed-view">
      <ul class="tag-list tag-list">
        <li class="item">
          <div class="tag">
            <div class="info-box">
              <img class="info-box-img" src="./images/1.png" alt />
              <div class="title">Vuex</div>
              <div class="meta-box">10000关注 1000文章</div>
            </div>
            <div class="action-box">
              <button class="subscribe-btn subscribed">
                <span>已关注</span>
              </button>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="tag">
            <div class="info-box">
              <img class="info-box-img" src="./images/1.png" alt />
              <div class="title">Vuex</div>
              <div class="meta-box">10000关注 1000文章</div>
            </div>
            <div class="action-box">
              <button class="subscribe-btn subscribed">
                <span>已关注</span>
              </button>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="tag">
            <div class="info-box">
              <img class="info-box-img" src="./images/1.png" alt />
              <div class="title">Vuex</div>
              <div class="meta-box">10000关注 1000文章</div>
            </div>
            <div class="action-box">
              <button class="subscribe-btn subscribed">
                <span>已关注</span>
              </button>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="tag">
            <div class="info-box">
              <img class="info-box-img" src="./images/1.png" alt />
              <div class="title">Vuex</div>
              <div class="meta-box">10000关注 1000文章</div>
            </div>
            <div class="action-box">
              <button class="subscribe-btn subscribed">
                <span>已关注</span>
              </button>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="tag">
            <div class="info-box">
              <img class="info-box-img" src="./images/1.png" alt />
              <div class="title">Vuex</div>
              <div class="meta-box">10000关注 1000文章</div>
            </div>
            <div class="action-box">
              <button class="subscribe-btn subscribed">
                <span>已关注</span>
              </button>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="tag">
            <div class="info-box">
              <img class="info-box-img" src="./images/1.png" alt />
              <div class="title">Vuex</div>
              <div class="meta-box">10000关注 1000文章</div>
            </div>
            <div class="action-box">
              <button class="subscribe-btn subscribed">
                <span>已关注</span>
              </button>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="tag">
            <div class="info-box">
              <img class="info-box-img" src="./images/1.png" alt />
              <div class="title">Vuex</div>
              <div class="meta-box">10000关注 1000文章</div>
            </div>
            <div class="action-box">
              <button class="subscribe-btn subscribed">
                <span>已关注</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe",
  data() {
    return {
      followList: [],
    };
  },
  mounted() {
    this.getFollow();
  },
  methods: {
    async getFollow() {
      const result = await this.$API.subscribe.getFollow({
        cursor: "0",
        limit: 20,
      });
      this.followList = result.data;
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
div {
  display: block;
}
a {
  text-decoration: none;
}
.view {
  // width: 960px;
  // height: 100%;
  background-color: #fff;

  // nav
  .view-nav {
    top: 4.1rem;
    width: 100%;
    height: 45px;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    // transition: all 0.2s;
    // transform: translateZ(0);
    background-color: #fff;

    .nav-list {
      width: 960px;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      line-height: 1;
      font-size: 1.16rem;
      font-weight: 600;
      .nav-item {
        height: 100%;
        align-items: center;
        display: flex;
        font-size: 1.16rem;
        // 文字加粗
        font-weight: 600;
        padding: 0 2.5rem;
        // margin-right: 20px;
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.3s, color 0.3s;
      }
      .nav-list-first {
        border-bottom-color: #007fff;
        .nav-item-first {
          color: #007fff;
        }
      }

      // .nav-item-second {
      //   color: #007fff;
      // }
      .nav-item-t:hover {
        color: #007fff;
        height: 100%;
        align-items: center;
        display: flex;
        // font-size: 1.16rem;
        // // // 文字加粗
        // font-weight: 600;
        // padding: 0 2.5rem;
        border-bottom: 2px solid #007fff;
        // transition: border-bottom 0.3s, color 0.3s;
        border-bottom-color: #007fff;
      }
    }
  }
  .subscribe-subscribed-view {
    // height: 100%;
    width: 960px;
    // 居中
    position: absolute;
    left: 0;
    right: 0;
    margin: 20px auto;
    ul {
      height: 100%;
      display: block;
      margin-top: 20px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 20px;
      .item {
        height: 196px;
        width: 25%;
        display: inline-block;
        margin-bottom: 1.3rem;
        padding: 0 0.7rem;
        box-sizing: border-box;
        // background-color: brown;

        .tag {
          width: 196px;
          // height: 150px;
          // height: 100%;
          display: inline-block;
          border: 1px solid #f1f1f1;
          transition: border-color 0.3s;
          text-align: center;
          padding: 1.5rem 0;

          .info-box {
            // background-color: rgb(255, 254, 245);
            .info-box-img {
              margin-top: 12px;
              margin-bottom: 12px;
              height: 32px;
              border-radius: 12px 12px 12px 12px;
            }
            .title {
              font-size: 1.5rem;
              line-height: 2rem;
              color: #333;
            }
            .meta-box {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.1rem;
              color: #909090;
              text-align: center;
            }
          }
          .subscribe-btn {
            border: 1px solid #37c700;
            background-color: #fff;
            color: #37c700;
            margin: 1rem auto;
            font-size: 1.1rem;
            background-color: #37c700;
            color: #fff;
            border-radius: 2px;
            padding: 0.5rem 1.3rem;
            outline: none;
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
