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
      .loginCart-title {
        display: flex;
      }
    }
  }
}
</style>
