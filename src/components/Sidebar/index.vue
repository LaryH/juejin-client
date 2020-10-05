<template>
  <div>
    <!-- 侧边栏组件 -->
    <div class="sidebar">
      <!-- 登录卡片 -->
      <div class="sidebar-login">
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
            <li class="item"></li>
            <li class="item"></li>
            <li class="item"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
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
    }
  }
}
</style>
