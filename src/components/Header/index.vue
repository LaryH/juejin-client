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
          <button class="login-button" @click="login">登录</button>
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
      showLoginCart: false,
    };
  },
  mounted() {
    this.$API.home.getRecommendTagList();
  },
  methods: {
    login() {
      this.showLoginCart = true;
    },
    closeLoginCart() {
      this.showLoginCart = false;
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
