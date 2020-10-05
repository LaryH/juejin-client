<template>
  <div class="loginCart">
    <form class="loginCart-auth-form">
      <div class="loginCart-panda">
        <img src="./images/panda01.png" class="normal" />
      </div>
      <div class="loginCart-title">
        <h1>手机登录</h1>
        <i title="关闭">x</i>
      </div>
      <div class="loginCart-input-group">
        <div class="loginCart-userInfo-box">
          <div class="loginCart-dropdown-input">
            <span>+86</span>
            <i>></i>
          </div>
          <input placeholder="请输入手机号码" />
        </div>
        <div class="loginCart-password-box">
          <input type="password" placeholder="验证码" />
          <button>获取验证码</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginCart",
};
</script>

<style lang="less" scoped>
.loginCart {
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

  .loginCart-auth-form {
    position: relative;
    padding: 2rem;
    width: 26.5rem;
    max-width: 100%;
    font-size: 1.167rem;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;

    .loginCart-panda {
      display: block;
      img {
        position: absolute;
        top: 0;
        left: 50%;
        width: 10rem;
        z-index: 1;
        transform: translate(-50%, -83%);
      }
    }
    .loginCart-title {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      margin: 0 0 2rem;
    }
    .loginCart-input-group {
      .loginCart-userInfo-box {
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 10px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        .loginCart-dropdown-input {
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
      .loginCart-password-box {
        position: relative;
        input {
          padding: 10px;
          width: 100%;
          border: 1px solid #e9e9e9;
          border-radius: 2px;
          outline: none;
          box-sizing: border-box;
        }
        button {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          color: #007fff;
          line-height: 1;
          background-color: transparent;
          border: none;
          outline: none;
        }
      }
    }
  }
}
</style>
