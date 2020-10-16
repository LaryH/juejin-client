<template>
  <div>
    <!-- 侧边栏组件 -->
    <div class="sidebar">
      <!-- 登录卡片 -->
      <div class="sidebar-login" v-if="!userInfo.user_name">
        <div class="sidebar-login-box">
          <div class="login-title">掘金 - juejin.im</div>
          <div class="login-slogan">一个帮助开发者成长的社区</div>
          <div class="input-group">
            <div class="userInfo-box">
              <div class="dropdown-input">
                <span>+86</span>
                <img src="./images/down.svg" alt="下拉" />
              </div>
              <input
                autocomplete="off"
                maxlength="64"
                name="loginPhoneOrEmail"
                placeholder="请输入手机号"
              />
            </div>
            <div class="password-box">
              <input
                type="text"
                maxlength="4"
                autocomplete="off"
                name="registerSmsCode"
                placeholder="验证码"
              />
              <button>获取验证码</button>
            </div>
          </div>
          <button class="submit-btn">立即登录</button>
          <!-- 协议 -->
          <div class="agreement">
            注册登录即表示<br />同意
            <a href="https://juejin.im/terms" target="_blank">用户协议</a>
            、
            <a href="https://juejin.im/privacy" target="_blank">隐私政策</a>
          </div>
        </div>
      </div>

      <!-- 二维码卡片 -->
      <div class="sidebar-dimensional">
        <div class="sidebar-dimensional-box">
          <a href="https://juejin.im/app" target="_blank" class="app-link"
            ><img src="./images/app-install.png" class="qr-img" />
            <div class="content-box">
              <div class="headline">
                下载掘金客户端
              </div>
              <div class="desc">
                一个帮助开发者成长的社区
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- 作者排行 -->
      <div class="sidebar-author">
        <div class="sidebar-author-box">
          <header class="author-block-header">🎖️作者榜</header>
          <ul class="author-list">
            <li
              class="item"
              v-for="aurthor in aurthorList"
              :key="aurthor.user_id"
            >
              <a href="" target="_blank" class="link">
                <div
                  class="author-avatar"
                  :style="`background-image: url(${aurthor.avatar_large})`"
                ></div>
                <div class="user-info">
                  <a href="" target="_blank" rel="" class="username "
                    ><span class="name" style="max-width: 128px;">
                      {{ aurthor.user_name }}
                    </span>
                    <a
                      href="https://juejin.im/book/6844733795329900551/section/6844733795371843597"
                      target="_blank"
                      class="rank"
                      ><img src="./images/vip3.svg" alt="lv-4"
                    /></a>
                  </a>
                  <div class="position">
                    {{ aurthor.job_title }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                      aurthor.company
                    }}
                  </div>
                </div>
              </a>
            </li>
            <li class="item">
              <div data-v-a95047c4="" class="more">
                <span>完整榜单</span>
                <i>></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 广告 -->
      <div class="sidebar-ads">
        <ul class="ads-list">
          <li class="item">
            <a class="link" href="/extension" target="_blank"
              ><img
                src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"
                class="icon"
              />
              <span class="title">下载掘金浏览器插件</span></a
            >
          </li>
          <li class="item">
            <a
              class="link"
              href="https://github.com/xitu/gold-miner"
              target="_blank"
              ><img
                src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/juejin-miner.b78347c.png"
                class="icon"
              />
              <span class="title">前往掘金翻译计划</span></a
            >
          </li>
        </ul>
      </div>

      <!-- 其他 -->
      <div class="sidebar-other">
        <ul class="more-list clearfix">
          <li class="item">
            <a href="/dev-api/about" target="_blank">关于</a>
          </li>
          <li class="item">
            <a href="/license" target="_blank" rel="">营业执照</a>
          </li>
          <li class="item">
            <a href="/dev-api/links" target="_blank">友情链接</a>
          </li>
        </ul>
        <ul class="more-list clearfix">
          <li class="item">
            <a href="/dev-api/terms" target="_blank">用户协议</a>
          </li>
          <li class="item">
            <a href="/dev-api/privacy" target="_blank">隐私政策</a>
          </li>
          <li class="item">
            <a href="/book/5c90640c5188252d7941f5bb" target="_blank">
              使用指南
            </a>
          </li>
        </ul>
        <ul class="more-list">
          <li class="item">
            <a href="http://www.beian.miit.gov.cn" target="_blank">
              津ICP备15003202号-2
            </a>
          </li>
        </ul>
        <ul class="more-list clearfix">
          <li class="item">
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719"
              target="_blank"
            >
              京公网安备11010802026719号
            </a>
          </li>
        </ul>
        <ul class="more-list clearfix">
          <li class="item"><a>&copy;2020 掘金</a></li>
        </ul>
        <ul class="more-list account-list">
          <li class="item weibo">
            <a
              href="http://weibo.com/xitucircle"
              rel="nofollow noopener noreferrer"
              target="_blank"
              ><img
                src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/weibo.0cd39f5.png"
                alt="微博"
                class="icon"
            /></a>
          </li>
          <li class="item wechat">
            <img
              src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/wechat.ce329e6.png"
              alt="微信"
              class="icon"
            />
            <div class="qr-panel">
              <div class="title">
                微信扫一扫
              </div>
              <img
                src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/juejin-qr.b247fde.jpeg"
                class="qr"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["categoryId"],
  data() {
    return {
      aurthorList: [],
      userInfo: JSON.parse(localStorage.getItem("USERINFO_KEY")) || {},
    };
  },
  mounted() {
    this.getRecommendAuthor();
  },
  methods: {
    async getRecommendAuthor() {
      const result = await this.$API.home.getRecommendAuthor(this.categoryId);
      if (result.err_msg === "success") {
        this.moreAurthorList = result.data;
        this.aurthorList = this.moreAurthorList.filter(
          (item, index) => index < 3
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
.sidebar {
  width: 20rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  .sidebar-login-box {
    margin-bottom: 1.3rem;
    padding: 1.333rem;
    background-color: #fff;
    .login-title {
      margin-bottom: 0.5rem;
      font-size: 1.167rem;
      color: #2e3135;
    }
    .login-slogan {
      margin-bottom: 0.5rem;
      font-size: 1.167rem;
      color: #2e3135;
    }
    .userInfo-box {
      padding: 0 10px;
      margin-bottom: 10px;
      border: 1px solid #d9d9d9;
      display: flex;
      border-radius: 2px;
      justify-content: center;
      align-items: center;
      background-color: #fbfbfb;
      .dropdown-input {
        width: 32%;
        display: flex;
        justify-content: space-between;
      }
      input {
        width: 68%;
        padding: 10px;
        border: none;
        outline: none;
        background-color: #fbfbfb;
      }
    }
    .password-box {
      position: relative;
      margin-bottom: 10px;
      input {
        padding: 10px;
        width: 100%;
        border: 1px solid #e9e9e9;
        border-radius: 2px;
        outline: none;
        box-sizing: border-box;
        background-color: #fbfbfb;
      }
      button {
        position: absolute;
        top: 0;
        right: 10px;
        height: 100%;
        color: #007fff;
        line-height: 1;
        background-color: transparent;
        cursor: pointer;
        border: none;
        outline: none;
      }
    }
    .submit-btn {
      padding: 0.7rem 0;
      width: 100%;
      font-size: 1.167rem;
      background-color: #007fff;
      color: #fff;
      border-radius: 2px;
      border: none;
      outline: none;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
    }
    .submit-btn:hover {
      background-color: #0371df;
      color: #fff;
    }

    .agreement {
      margin-top: 1.667rem;
      font-size: 1.167rem;
      line-height: 1.5;
      color: #767676;
      a {
        color: #007fff;
      }
    }
  }

  .sidebar-dimensional-box {
    background-color: #fff;
    position: relative;
    margin-bottom: 1.5rem;
    .app-link {
      display: flex;
      align-items: center;
      padding: 1.3rem;
      text-decoration: none;
      .qr-img {
        margin-right: 0.5rem;
        width: 4.167rem;
        height: 4.167rem;
      }
      .headline {
        font-size: 1.167rem;
        font-weight: 600;
        color: #333;
      }
      .desc {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: #909090;
      }
    }
  }

  .sidebar-author-box {
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    margin-bottom: 1.3rem;
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;
    .author-block-header {
      padding: 1rem 1.3rem;
      border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
    }
    .item {
      cursor: pointer;
    }
    .link {
      padding: 1rem 1.3rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      .author-avatar {
        flex: 0 0 auto;
        width: 3.8rem;
        height: 3.8rem;
        border-radius: 50%;
        margin-right: 0.5rem;
        background-size: cover;
      }
      .user-info {
        overflow: hidden;
        .username {
          font-size: 1.16rem;
          font-weight: 400;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 3px;
          .rank {
            margin-left: 0.33rem;
            vertical-align: middle;
            img {
              width: auto;
              height: auto;
            }
          }
        }
        .position {
          color: #909090;
          font-size: 1rem;
          margin-bottom: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      &:hover {
        background-color: hsla(0, 0%, 84.7%, 0.1);
      }
    }
    .more {
      color: #007fff;
      padding: 1rem 0;
      text-align: center;
      border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
      i {
        margin-left: 5px;
      }
    }
  }

  .sidebar-ads {
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    margin-bottom: 1.3rem;
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;
    .link {
      display: flex;
      align-items: center;
      padding: 1rem;
      height: 100%;
      .icon {
        width: 3rem;
        margin-right: 0.8rem;
      }
      .title {
        position: relative;
        font-size: 1.16rem;
        line-height: 1;
        color: #333;
      }
    }
  }

  .sidebar-other {
    border-radius: 2px;
    margin-bottom: 1.3rem;
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;
    .more-list {
      font-size: 1rem;
      line-height: 1.6;
      color: #9aa3ab;
      .item {
        float: left;
        &::after {
          content: "·";
          margin: 0 0.5rem;
          color: #c6cfda;
        }
      }
    }
    .account-list {
      position: relative;
      font-size: 1rem;
      line-height: 1.6;
      color: #9aa3ab;
      img {
        width: 24px;
        cursor: pointer;
      }
      .qr-panel {
        position: absolute;
        background: #fff;
        width: 10rem;
        top: 30px;
        left: 20px;
        z-index: 2;
        padding: 0.8rem 0 0;
        opacity: 0;
        border: 1px solid #ddd;
        transform: translate(-24px);
        .title {
          text-align: center;
        }
        .qr {
          width: 100%;
        }
      }
      .wechat:hover {
        .qr-panel {
          opacity: 1;
        }
      }
    }
  }
}
</style>
