<template>
  <div>
    <div class="header">
      <div class="header-nav">
        <div class="header-nav-left">
          <div class="logo">
            <img src="./img/juejinlogo.svg" alt="掘金" />
          </div>
          <div class="header-nav-list">
            <div class="header-nav-item">
              <router-link to="/home">首页</router-link>
            </div>
            <div class="header-nav-item">
              <router-link to="/pins">沸点</router-link>
            </div>
            <div class="header-nav-item">
              <router-link to="/topics">话题</router-link>
            </div>
            <div class="header-nav-item">
              <router-link to="/books">小册</router-link>
            </div>
            <div class="header-nav-item">
              <router-link to="/events">活动</router-link>
            </div>
          </div>
        </div>
        <div class="header-nav-right">
          <div class="search-input">
            <input type="text" placeholder="探索掘金" />
          </div>
          <div class="add-button-container">
            <button class="add-button">写文章</button>
            <div class="more"></div>
          </div>
          <button class="login-button" @click="login" v-if="!userInfo.nickName">
            登录
          </button>
          <div class="user-information" v-else>
            <div class="notification">
              <a class="app-link" href="" target="_blank">
                <i class="iconfont icontongzhi"></i>
              </a>
            </div>
            <div class="menu">
              <div class="avatar" @click="clickUserImg(true)">
                <img src="./img/head.jpg" alt="用户头像" class="avatarImg" />
              </div>
              <ul
                class="user-dropdown-list"
                :style="`display:${isSetNav ? 'block' : 'none'}`"
              >
                <div class="nav-menu-item-group">
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconqianbipencil82"></i>
                      <span>写文章</span></a
                    >
                  </li>
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconcaogaoxiang"></i>
                      <span>草稿</span></a
                    >
                  </li>
                </div>
                <div class="nav-menu-item-group">
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconcaogaoxiang"></i>
                      <span>我的主页</span></a
                    >
                  </li>
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont icondianzan"></i>
                      <span>我赞过的</span></a
                    >
                  </li>
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconai-book"></i>
                      <span>我的小册</span></a
                    >
                  </li>
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconshoucang"></i>
                      <span>我的收藏集</span></a
                    >
                  </li>
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconbiaoqian"></i>
                      <span>标签管理</span></a
                    >
                  </li>
                </div>
                <div class="nav-menu-item-group">
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconshezhi"></i>
                      <span>设置</span></a
                    >
                  </li>
                  <li class="nav-menu-item">
                    <a href="">
                      <i class="iconfont iconguanyu"></i>
                      <span>关于</span></a
                    >
                  </li>
                </div>
                <div class="nav-menu-item-group">
                  <li class="nav-menu-item" @click="logout">
                    <a href="javascript:;">
                      <i class="iconfont icontuichu"></i>
                      <span>登出</span></a
                    >
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoginCart v-if="showLoginCart" @closeLoginCart="closeLoginCart" />
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LoginCart from "@/components/LoginCart";
export default {
  name: "Header",
  components: {
    LoginCart,
  },
  data() {
    return {
      isSetNav: false,
      showLoginCart: false,
      userInfo: JSON.parse(localStorage.getItem("USERINFO_KEY")) || {},
    };
  },
  mounted() {},
  methods: {
    login() {
      this.showLoginCart = true;
    },
    closeLoginCart() {
      this.showLoginCart = false;
    },
    // 点击用户头像，显示设置栏
    clickUserImg(Type) {
      this.isSetNav = !this.isSetNav;
    },

    // 退出登录
    async logout() {
      console.log(111);
      const result = await this.$API.login.reqLogout();
      console.log(result);
      if (result.code === 200) {
        //  清空数据
        localStorage.removeItem("USERINFO_KEY");
        this.userInfo = {};
        return "ok";
      }
    },
  },

};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .header-nav {
    width: 960px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-nav-left {
      display: flex;
      align-items: center;

      .logo {
        margin-right: 24px;
      }

      .header-nav-list {
        display: flex;
        justify-content: space-between;

        .header-nav-item {
          font-size: 16px;
          line-height: 60px;
          width: 68px;
          text-align: center;
        }
      }
    }

    .header-nav-right {
      display: flex;

      .login-button {
        width: 72px;
        height: 32px;
        border: 1px solid #0371df;
        border-radius: 2px;
        font-size: 16px;
        background-color: #fff;
        margin-left: 15px;
        color: #0371df;
        cursor: pointer;
      }

      .user-information {
        display: flex;
        align-items: center;
        .notification {
          color: #71777c;
          margin: 0 25px;
          font-size: 16px;
        }
        .menu {
          position: relative;
          .avatarImg {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            background-size: cover;
            cursor: pointer;
          }
          .user-dropdown-list {
            position: absolute;
            width: 13rem;
            right: 0;
            top: 92px;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(177, 180, 185, 0.45);
            border-radius: 4px;
            font-size: 1.2rem;
            z-index: 998;

            .nav-menu-item-group {
              border-bottom: 1px solid rgba(0, 0, 0, 0.04);
              padding: 1rem 0;
            }
            .nav-menu-item {
              font-size: 1.3rem;
              cursor: pointer;
              & > a {
                display: flex;
                align-items: center;
                padding: 0.5rem 1rem;
                color: #71777c;
              }
              &:hover {
                background-color: hsla(0, 0%, 94.9%, 0.5);
              }
              .iconfont {
                display: inline-block;
                width: 1em;
                height: 1em;
                margin-right: 0.8rem;
                font-size: 1.2em;
                vertical-align: middle;
                color: #b2bac2;
              }
            }
          }
        }
      }

      .add-button-container {
        position: relative;
        margin: 0 15px;

        .add-button {
          width: 64px;
          height: 32px;
          border-radius: 2px;
          background-color: #007fff;
          font-size: 14px;
          color: #fff;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }

        .more {
          width: 16px;
          height: 32px;
          position: absolute;
          top: 0px;
          right: -14px;
          background-color: #007fff;
          border-left: 1px solid hsla(0, 0%, 100%, 0.1);
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;

          &::after {
            content: "";
            position: absolute;
            left: 5px;
            top: 14px;
            border: 3px solid rgba(0, 0, 0, 0);
            border-top: 3px solid #fff;
          }
        }
      }

      .search-input {
        margin: 0 15px;
        margin: 0 15px;
        width: 166px;
        border: 1px solid #ccc;
        line-height: 30px;
        text-indent: 1em;
        border-radius: 3px;

        /* WebKit browsers */
        input::-webkit-input-placeholder {
          color: #ccc;
          font-size: 14px;
        }
        /* Mozilla Firefox 4 to 18 */
        input:-moz-placeholder {
          color: #ccc;
          opacity: 1;
          font-size: 14px;
        }
        /* Mozilla Firefox 19+ */
        input::-moz-placeholder {
          color: #ccc;
          opacity: 1;
          font-size: 14px;
        }
        /* Internet Explorer 10+ */
        input:-ms-input-placeholder {
          color: #ccc;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
