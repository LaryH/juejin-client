<template>
  <div class="logincart-container">
    <div class="feedback">
      <a href="https://juejin.im/topic/6824710202692993037?sort=newest">
        <i>...</i>
      </a>
    </div>
    <div class="logincart">
      <form class="logincart-auth-form">
        <div class="logincart-panda" ref="panda">
          <img src="./images/panda01.png" class="normal" ref="normal" />
          <img src="./images/panda02.png" class="greeting" ref="greeting" />
          <img src="./images/panda03.png" class="blindfold" ref="blindfold" />
        </div>
        <div class="logincart-title">
          <h1 v-if="isPhone">手机登录</h1>
          <h1 v-else>账密登录</h1>
          <i title="关闭" @click="close" class="close">x</i>
        </div>
        <!-- 手机号/验证码 -->
        <div class="logincart-input-group">
          <div class="logincart-userInfo-box">
            <div class="logincart-dropdown-input">
              <span>+86</span>
              <img src="./images/down.svg" alt="下拉" />
            </div>
            <input
              v-if="isPhone"
              autocomplete="off"
              maxlength="64"
              name="loginPhoneOrEmail"
              placeholder="请输入手机号码"
              @focus="changePandaIMG('phone')"
            />
            <input
              v-else
              autocomplete="off"
              maxlength="64"
              name="loginPhoneOrEmail"
              placeholder="请输入手机号码/邮箱"
              @focus="changePandaIMG('phoneOrEmail')"
            />
          </div>
          <div class="logincart-password-box" v-show="isPhone">
            <input
              type="text"
              maxlength="4"
              autocomplete="off"
              name="registerSmsCode"
              placeholder="验证码"
              @focus="changePandaIMG('smsCode')"
            />
            <button>获取验证码</button>
          </div>
          <div class="logincart-password-box password" v-show="!isPhone">
            <input
              type="password"
              name="loginPassword"
              maxlength="64"
              placeholder="请输入密码"
              @focus="changePandaIMG('loginPassword')"
            />
          </div>
        </div>
        <!-- 登录按钮 -->
        <button class="logincart-btn">登录</button>
        <!-- 其他登录方式 -->
        <div class="logincart-other-login" v-show="isPhone">
          <span @click="changeLogin('other')">手机登录</span>
          <span class="logincart-forget-pw">忘记密码</span>
        </div>
        <div class="logincart-other-login" v-show="!isPhone">
          <span @click="changeLogin('phone')">其他登录方式</span>
        </div>
        <!-- 三方登录 -->
        <div class="logincart-third-party" v-show="!isPhone">
          <div class="logincart-img-box">
            <img src="./images/weibo.svg" title="微博" alt="微博" />
          </div>
          <div class="logincart-img-box">
            <img src="./images/wechat.svg" title="微信" alt="微信" />
          </div>
          <div class="logincart-img-box">
            <img src="./images/github.svg" title="github" alt="github" />
          </div>
        </div>
        <!-- 协议 -->
        <div class="logincart-agreement">
          注册登录即表示同意
          <a href="https://juejin.im/terms" target="_blank">用户协议</a>
          、
          <a href="https://juejin.im/privacy" target="_blank">隐私政策</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginCart",
  data() {
    return {
      // 是否手机登录
      isPhone: true,
    };
  },
  methods: {
    // 切换登录方式
    changeLogin(LoginType) {
      this.isPhone = true;
      if (LoginType === "phone") return;
      this.isPhone = false;
    },

    // 修改熊猫图片
    changePandaIMG(Type) {
      // 获取图片Dom
      const normalIMG = this.$refs.normal;
      const greetingIMG = this.$refs.greeting;
      const blindfoldIMG = this.$refs.blindfold;
      const pandeImgs = this.$refs.panda.childNodes;
      // 排他
      for (let i = 0; i < pandeImgs.length; i++) {
        pandeImgs[i].style.display = "none";
        console.log(pandeImgs[i].className);
      }
      switch (Type) {
        case "phone":
        case "phoneOrEmail":
          greetingIMG.style.display = "block";
          break;
        case "smsCode":
          normalIMG.style.display = "block";
          break;
        case "loginPassword":
          blindfoldIMG.style.display = "block";
          break;
        default:
          break;
      }
    },
    // 关闭登录框
    close() {
      this.$emit("closeLoginCart");
    },
  },
};
</script>

<style lang="less" scoped>
.feedback {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 3.33rem;
  height: 3.33rem;
  text-align: center;
  line-height: 3.33rem;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-size: 1.3rem;
  color: #007fff;
  z-index: 501;
}
.logincart {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 500;

  .logincart-auth-form {
    position: relative;
    padding: 2rem;
    width: 26.5rem;
    max-width: 100%;
    font-size: 1.167rem;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;

    .logincart-panda {
      display: block;
      img {
        position: absolute;
        display: none;
        top: 0;
        left: 50%;
        width: 10rem;
        z-index: 1;
        transform: translate(-50%, -83%);
        &.normal {
          display: block;
        }
      }
      .greeting {
        transform: translate(-50%, -75.8%);
      }

      .blindfold {
        width: 8.6rem;
        transform: translate(-50%, -75%);
      }
    }
    .logincart-title {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      margin: 0 0 2rem;

      .close {
        cursor: pointer;
      }
    }
    .logincart-input-group {
      .logincart-userInfo-box {
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 10px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        .logincart-dropdown-input {
          width: 25%;
          display: flex;
          justify-content: space-between;
        }
        input {
          width: 75%;
          padding: 10px;
          border: none;
          outline: none;
          background: white;
        }
      }
      .logincart-password-box {
        position: relative;
        margin-bottom: 10px;
        input {
          padding: 10px;
          width: 100%;
          border: 1px solid #e9e9e9;
          border-radius: 2px;
          outline: none;
          box-sizing: border-box;
          background: white;
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
    }

    .logincart-btn {
      width: 100%;
      height: 3.334rem;
      color: #fff;
      background-color: #007fff;
      border: none;
      border-radius: 2px;
      outline: none;
      box-sizing: border-box;
      cursor: pointer;
      margin-top: 5px;
      outline: none;
    }

    .logincart-other-login {
      margin: 1rem 0 0;
      color: #767676;
      span {
        color: #007fff;
        cursor: pointer;
      }
      .logincart-forget-pw {
        float: right;
      }
    }

    .logincart-third-party {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 1.2rem;
      line-height: 1.9rem;
      color: #767676;
      .logincart-img-box {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #f4f8fb;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 1.9rem;
          vertical-align: bottom;
          cursor: pointer;
        }
      }
    }

    .logincart-agreement {
      margin-top: 1.667rem;
      color: #767676;
      a {
        color: #007fff;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>
