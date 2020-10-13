<template>
  <div class="logincart-container">
    <div class="feedback">
      <a href="https://juejin.im/topic/6824710202692993037?sort=newest">
        <i>...</i>
      </a>
    </div>
    <div class="logincart">
      <form class="logincart-auth-form" >
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
               v-model="mobile"
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
              v-model="password"
            />
          </div>
        </div>
        <!-- 登录按钮 -->
        <button class="logincart-btn" @click.prevent="login">登录</button>
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
      mobile:"",
      password:"",
      
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

    // 登录
    async login(){
      const{mobile,password}= this;
      console.log(mobile,password);
      // 正则验证
      let phoneReg = new RegExp(/^1[0-9]{10}/);
      let pwdReg = new RegExp(/[a-zA-Z0-9]{6}/);
      if (!phoneReg.test(mobile)){
        alert('请输入正确手机号格式~~')
        return
      }
      if (!pwdReg.test(password)) {
        alert('手机或密码不正确~~请重新输入')
      }
      try {
        let result = await this.$API.login.reqLogin({mobile,password})
         console.log(result)
         if(result.code === 200){
          // 数据存入localstorage中
          localStorage.setItem("USERINFO_KEY",JSON.stringify(result.data))
          alert('恭喜你登录成功~~');
          location.reload()
          this.close()
         }else{
             return Promise.reject(new Error('failed'))
        }
      } catch (error) {
        alert(error.message)
      }
      // 关闭登录框
      this.close()
      }
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
  </head>
  <body >
    <div data-server-rendered="true" id="__nuxt"><div id="__layout"><div id="juejin"><div class="global-component-box"><!----> <!----> <!----> <!----> <!----> <div class="emoji-barrage" data-v-68506677><!----></div> <!----> <!----> <div class="bind-phone-number-modal-box" data-v-6217922a><div st:block="bindPhoneNumberModal" class="modal-mask" style="display:none;" data-v-6217922a data-v-6217922a></div> <form class="bind-phone-number-form" style="display:none;" data-v-6217922a data-v-6217922a><i title="关闭" class="close-btn ion-close-round" data-v-6217922a></i> <h1 class="title" data-v-6217922a>提示</h1> <h2 class="hint" data-v-6217922a>根据我国<a href="http://www.cac.gov.cn/2016-11/07/c_1119867116.htm" target="_blank" style="color:#007fff">《网络安全法》</a>，您需要绑定手机号后才可在掘金社区内发布内容。</h2> <div class="input-group" data-v-6217922a><div class="input-box dropdown-box" data-v-6217922a><div class="dropdown-input-container" style="width:26%;" data-v-4e5eda86 data-v-6217922a><div class="dropdown-input-box" data-v-4e5eda86><input autocomplete="off" value="86" data-v-4e5eda86> <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICAgIDxwYXRoIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgNy42NTlsMy4xNDYtMy40OTZhLjQ2NS40NjUgMCAwIDEgLjcwOCAwIC42LjYgMCAwIDEgMCAuNzg1bC0zLjUgMy44OWEuNDY1LjQ2NSAwIDAgMS0uNzA4IDBsLTMuNS0zLjg5YS42LjYgMCAwIDEgMC0uNzg1LjQ2NS40NjUgMCAwIDEgLjcwOCAwTDYgNy42NTl6Ii8+Cjwvc3ZnPg==" class="arrow" style="transform:rotate(0deg);" data-v-4e5eda86></div> <div class="dropdown-pannel" style="display:none;" data-v-4e5eda86 data-v-4e5eda86><ul data-v-4e5eda86><li class="item selected" data-v-4e5eda86><span data-v-4e5eda86>中国</span> <span data-v-4e5eda86>+86</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>中国澳门</span> <span data-v-4e5eda86>+853</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>中国台湾</span> <span data-v-4e5eda86>+886</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>中国香港</span> <span data-v-4e5eda86>+852</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿尔巴尼亚</span> <span data-v-4e5eda86>+355</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿尔及利亚</span> <span data-v-4e5eda86>+213</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿根廷</span> <span data-v-4e5eda86>+54</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿拉伯联合酋长国</span> <span data-v-4e5eda86>+971</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿鲁巴岛</span> <span data-v-4e5eda86>+297</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿曼</span> <span data-v-4e5eda86>+968</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿塞拜疆</span> <span data-v-4e5eda86>+994</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>阿森松</span> <span data-v-4e5eda86>+247</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>埃及</span> <span data-v-4e5eda86>+20</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>埃塞俄比亚</span> <span data-v-4e5eda86>+251</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>爱尔兰</span> <span data-v-4e5eda86>+353</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>爱沙尼亚</span> <span data-v-4e5eda86>+372</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>安道尔</span> <span data-v-4e5eda86>+376</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>安哥拉</span> <span data-v-4e5eda86>+244</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>安圭拉</span> <span data-v-4e5eda86>+1264</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>安提瓜和巴布达</span> <span data-v-4e5eda86>+1268</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>奥地利</span> <span data-v-4e5eda86>+43</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>奥兰群岛</span> <span data-v-4e5eda86>+358</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>澳大利亚</span> <span data-v-4e5eda86>+61</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>巴巴多斯</span> <span data-v-4e5eda86>+1246</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>巴哈马</span> <span data-v-4e5eda86>+1242</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>巴拉圭</span> <span data-v-4e5eda86>+595</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>巴勒斯坦</span> <span data-v-4e5eda86>+970</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>巴林</span> <span data-v-4e5eda86>+973</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>巴拿马</span> <span data-v-4e5eda86>+507</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>巴西</span> <span data-v-4e5eda86>+55</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>白俄罗斯</span> <span data-v-4e5eda86>+375</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>百慕大</span> <span data-v-4e5eda86>+1441</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>保加利亚</span> <span data-v-4e5eda86>+359</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>北马里亚纳群岛</span> <span data-v-4e5eda86>+1670</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>贝宁</span> <span data-v-4e5eda86>+229</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>比利时</span> <span data-v-4e5eda86>+32</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>冰岛</span> <span data-v-4e5eda86>+354</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>波多黎各</span> <span data-v-4e5eda86>+1787</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>波黑</span> <span data-v-4e5eda86>+387</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>波兰</span> <span data-v-4e5eda86>+48</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>玻利维亚</span> <span data-v-4e5eda86>+591</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>伯利兹</span> <span data-v-4e5eda86>+501</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>博茨瓦纳</span> <span data-v-4e5eda86>+267</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>不丹</span> <span data-v-4e5eda86>+975</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>布基拉法索</span> <span data-v-4e5eda86>+226</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>布隆迪</span> <span data-v-4e5eda86>+257</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>朝鲜</span> <span data-v-4e5eda86>+850</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>赤道几内亚</span> <span data-v-4e5eda86>+240</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>丹麦</span> <span data-v-4e5eda86>+45</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>德国</span> <span data-v-4e5eda86>+49</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>多哥</span> <span data-v-4e5eda86>+228</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>多米尼加共和国</span> <span data-v-4e5eda86>+1809</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>多米尼克</span> <span data-v-4e5eda86>+1767</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>俄罗斯</span> <span data-v-4e5eda86>+7</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>厄瓜多尔</span> <span data-v-4e5eda86>+593</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>厄立特里亚</span> <span data-v-4e5eda86>+291</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>法国</span> <span data-v-4e5eda86>+33</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>法罗群岛</span> <span data-v-4e5eda86>+298</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>法属波利尼西亚</span> <span data-v-4e5eda86>+689</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>法属圭亚那</span> <span data-v-4e5eda86>+594</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>梵蒂冈</span> <span data-v-4e5eda86>+379</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>菲律宾</span> <span data-v-4e5eda86>+63</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>斐济</span> <span data-v-4e5eda86>+679</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>芬兰</span> <span data-v-4e5eda86>+358</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>佛得角</span> <span data-v-4e5eda86>+238</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>冈比亚</span> <span data-v-4e5eda86>+220</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>刚果</span> <span data-v-4e5eda86>+242</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>刚果民主共和国</span> <span data-v-4e5eda86>+243</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>哥伦比亚</span> <span data-v-4e5eda86>+57</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>哥斯达黎加</span> <span data-v-4e5eda86>+506</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>格林纳达</span> <span data-v-4e5eda86>+1473</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>格陵兰岛</span> <span data-v-4e5eda86>+299</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>格鲁吉亚</span> <span data-v-4e5eda86>+995</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>瓜德罗普</span> <span data-v-4e5eda86>+590</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>关岛</span> <span data-v-4e5eda86>+1671</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圭亚那</span> <span data-v-4e5eda86>+592</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>海地</span> <span data-v-4e5eda86>+509</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>韩国</span> <span data-v-4e5eda86>+82</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>荷兰</span> <span data-v-4e5eda86>+31</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>荷属安的列斯</span> <span data-v-4e5eda86>+599</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>洪都拉斯</span> <span data-v-4e5eda86>+504</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>吉布提</span> <span data-v-4e5eda86>+253</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>加拿大</span> <span data-v-4e5eda86>+1</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>吉尔吉斯斯坦</span> <span data-v-4e5eda86>+996</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>几内亚</span> <span data-v-4e5eda86>+224</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>加那利群岛</span> <span data-v-4e5eda86>+3491</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>加纳</span> <span data-v-4e5eda86>+233</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>加蓬</span> <span data-v-4e5eda86>+241</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>柬埔寨</span> <span data-v-4e5eda86>+855</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>捷克</span> <span data-v-4e5eda86>+420</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>喀麦隆</span> <span data-v-4e5eda86>+237</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>卡塔尔</span> <span data-v-4e5eda86>+974</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>开曼群岛</span> <span data-v-4e5eda86>+1345</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>科摩罗</span> <span data-v-4e5eda86>+269</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>科索沃</span> <span data-v-4e5eda86>+883</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>科特迪瓦</span> <span data-v-4e5eda86>+225</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>科威特</span> <span data-v-4e5eda86>+965</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>克罗地亚</span> <span data-v-4e5eda86>+385</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>肯尼亚</span> <span data-v-4e5eda86>+254</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>拉脱维亚</span> <span data-v-4e5eda86>+371</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>莱索托</span> <span data-v-4e5eda86>+266</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>老挝</span> <span data-v-4e5eda86>+856</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>黎巴嫩</span> <span data-v-4e5eda86>+961</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>立陶宛</span> <span data-v-4e5eda86>+370</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>利比里亚</span> <span data-v-4e5eda86>+231</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>利比亚</span> <span data-v-4e5eda86>+218</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>列支敦士登</span> <span data-v-4e5eda86>+423</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>留尼旺岛</span> <span data-v-4e5eda86>+262</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>卢森堡</span> <span data-v-4e5eda86>+352</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>卢旺达</span> <span data-v-4e5eda86>+250</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>罗马尼亚</span> <span data-v-4e5eda86>+40</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马达加斯加</span> <span data-v-4e5eda86>+261</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马尔代夫</span> <span data-v-4e5eda86>+960</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马耳他</span> <span data-v-4e5eda86>+356</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马拉维</span> <span data-v-4e5eda86>+265</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马来西亚</span> <span data-v-4e5eda86>+60</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马里</span> <span data-v-4e5eda86>+223</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马其顿</span> <span data-v-4e5eda86>+389</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马绍尔群岛</span> <span data-v-4e5eda86>+692</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马提尼克</span> <span data-v-4e5eda86>+596</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>马约特</span> <span data-v-4e5eda86>+262</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>毛里求斯</span> <span data-v-4e5eda86>+230</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>毛里塔尼亚</span> <span data-v-4e5eda86>+222</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>美国</span> <span data-v-4e5eda86>+1</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>美属萨摩亚</span> <span data-v-4e5eda86>+1684</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>美属维尔京群岛</span> <span data-v-4e5eda86>+1340</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>蒙古</span> <span data-v-4e5eda86>+976</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>蒙塞拉特岛</span> <span data-v-4e5eda86>+1664</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>蒙特內哥羅</span> <span data-v-4e5eda86>+382</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>孟加拉国</span> <span data-v-4e5eda86>+880</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>秘鲁</span> <span data-v-4e5eda86>+51</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>密克罗尼西亚联邦</span> <span data-v-4e5eda86>+691</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>缅甸</span> <span data-v-4e5eda86>+95</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>摩尔多瓦</span> <span data-v-4e5eda86>+373</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>摩洛哥</span> <span data-v-4e5eda86>+212</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>摩纳哥</span> <span data-v-4e5eda86>+377</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>莫桑比克</span> <span data-v-4e5eda86>+258</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>墨西哥</span> <span data-v-4e5eda86>+52</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>纳米比亚</span> <span data-v-4e5eda86>+264</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>南非</span> <span data-v-4e5eda86>+27</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>尼泊尔</span> <span data-v-4e5eda86>+977</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>尼加拉瓜</span> <span data-v-4e5eda86>+505</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>尼日尔</span> <span data-v-4e5eda86>+227</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>尼日利亚</span> <span data-v-4e5eda86>+234</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>挪威</span> <span data-v-4e5eda86>+47</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>帕劳</span> <span data-v-4e5eda86>+680</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>葡萄牙</span> <span data-v-4e5eda86>+351</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>千里达及托巴哥</span> <span data-v-4e5eda86>+1868</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>日本</span> <span data-v-4e5eda86>+81</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>瑞典</span> <span data-v-4e5eda86>+46</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>瑞士</span> <span data-v-4e5eda86>+41</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圣诞岛</span> <span data-v-4e5eda86>+61</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圣基茨和尼维斯</span> <span data-v-4e5eda86>+1869</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圣卢西亚</span> <span data-v-4e5eda86>+1758</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圣马力诺</span> <span data-v-4e5eda86>+223</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圣马力诺</span> <span data-v-4e5eda86>+378</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圣皮埃尔和密克隆群岛</span> <span data-v-4e5eda86>+508</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>圣文森特和格林纳丁斯</span> <span data-v-4e5eda86>+1784</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>斯里兰卡</span> <span data-v-4e5eda86>+94</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>斯洛伐克</span> <span data-v-4e5eda86>+421</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>斯洛文尼亚</span> <span data-v-4e5eda86>+386</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>斯威士兰</span> <span data-v-4e5eda86>+268</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>苏丹</span> <span data-v-4e5eda86>+249</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>苏里南</span> <span data-v-4e5eda86>+597</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>索马里</span> <span data-v-4e5eda86>+252</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>塔吉克斯坦</span> <span data-v-4e5eda86>+992</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>沙特阿拉伯</span> <span data-v-4e5eda86>+966</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>塞舌尔</span> <span data-v-4e5eda86>+248</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>塞浦路斯</span> <span data-v-4e5eda86>+357</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>塞内加尔</span> <span data-v-4e5eda86>+221</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>塞拉利昂</span> <span data-v-4e5eda86>+232</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>塞尔维亚</span> <span data-v-4e5eda86>+381</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>萨尔瓦多</span> <span data-v-4e5eda86>+503</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>萨尔瓦多</span> <span data-v-4e5eda86>+503</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>汤加</span> <span data-v-4e5eda86>+676</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>坦桑尼亚</span> <span data-v-4e5eda86>+255</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>泰国</span> <span data-v-4e5eda86>+66</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>特克斯和凯科斯群岛</span> <span data-v-4e5eda86>+1649</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>突尼斯</span> <span data-v-4e5eda86>+216</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>图瓦卢</span> <span data-v-4e5eda86>+688</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>土库曼斯坦</span> <span data-v-4e5eda86>+993</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>乌兹别克斯坦</span> <span data-v-4e5eda86>+998</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>乌拉圭</span> <span data-v-4e5eda86>+598</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>乌克兰</span> <span data-v-4e5eda86>+380</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>乌干达</span> <span data-v-4e5eda86>+256</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>文莱</span> <span data-v-4e5eda86>+673</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>委内瑞拉</span> <span data-v-4e5eda86>+58</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>危地马拉</span> <span data-v-4e5eda86>+502</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>匈牙利</span> <span data-v-4e5eda86>+36</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>新西兰</span> <span data-v-4e5eda86>+64</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>新喀里多尼亚</span> <span data-v-4e5eda86>+687</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>新加坡</span> <span data-v-4e5eda86>+65</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>希腊</span> <span data-v-4e5eda86>+30</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>西萨摩亚</span> <span data-v-4e5eda86>+685</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>西撒哈拉</span> <span data-v-4e5eda86>+212</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>西班牙</span> <span data-v-4e5eda86>+34</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>越南</span> <span data-v-4e5eda86>+84</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>约旦</span> <span data-v-4e5eda86>+962</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>英属维尔京群岛</span> <span data-v-4e5eda86>+1284</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>英国</span> <span data-v-4e5eda86>+44</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>印度尼西亚</span> <span data-v-4e5eda86>+62</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>印度</span> <span data-v-4e5eda86>+91</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>意大利</span> <span data-v-4e5eda86>+39</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>以色列</span> <span data-v-4e5eda86>+972</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>伊朗</span> <span data-v-4e5eda86>+98</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>伊拉克</span> <span data-v-4e5eda86>+964</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>也门</span> <span data-v-4e5eda86>+967</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>亚美尼亚</span> <span data-v-4e5eda86>+374</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>牙买加</span> <span data-v-4e5eda86>+1876</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>中非</span> <span data-v-4e5eda86>+236</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>智利</span> <span data-v-4e5eda86>+56</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>直布罗陀</span> <span data-v-4e5eda86>+350</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>乍得</span> <span data-v-4e5eda86>+235</span></li><li class="item" data-v-4e5eda86><span data-v-4e5eda86>赞比亚</span> <span data-v-4e5eda86>+260</span></li></ul></div></div> <input maxlength="11" placeholder="请输入要绑定的手机号码" value="" class="input number-input" data-v-6217922a></div> <div class="input-box vcode-box" data-v-6217922a></div> <div class="input-box" data-v-6217922a><input maxlength="4" placeholder="验证码" value="" class="input" data-v-6217922a> <button class="send-vcode-btn" data-v-6217922a>
            获取验证码
          </button></div></div> <button st:name="bindBtn" class="btn" data-v-6217922a>
        绑定手机
      </button></form></div> <!----></div> <!----> <div class="view-container" data-v-6a3e47cf data-v-d6ec2d02><div class="main-header-box" data-v-6a3e47cf><header class="main-header main-header unauthorized visible" data-v-20709686 data-v-6a3e47cf><div class="container" data-v-20709686><a href="/" class="logo" data-v-20709686><img src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg" alt="掘金" class="logo-img" data-v-20709686> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ1cHgiIGhlaWdodD0iMzhweCIgdmlld0JveD0iMCAwIDQ1IDM4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkp1ZWppbjwvdGl0bGU+CiAgICA8ZGVzYz5KdWVqaW4uaW08L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iMC4xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCA1LjAwMDAwMCkiIGZpbGw9IiMwMDZDRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEuMjkzNDMyOCwyLjU4MzEzMDQ5IEwxOC4wMTczOTg0LDAgTDE0LjU5NDYyNCwyLjY5ODg3ODAxIEwxNC40MTcyMDc3LDIuODQxODIzMDQgTDE4LjAxNzM5ODQsNS43MTI0MjQ4MyBMMjEuNjI4NjU3OCwyLjg0MTgyMzA0IEwyMS4yOTM0MzI4LDIuNTgzMTMwNDkgWiBNMzMuNzA3ODI4OSwxMi42MDA2Njc0IEwxOC4wMDc5MTA5LDI0Ljk4MDI3NiBMMi4zMTc0ODA0NCwxMi42MDgyNTc0IEwwLDE0LjQ2OTcwNTIgTDE4LjAwNzkxMDksMjguNjY5MDE2NyBMMzYuMDI1NjI1NiwxNC40NjIxMTUyIEwzMy43MDc4Mjg5LDEyLjYwMDY2NzQgWiBNMTguMDA3OTEwOSwxMy42MDUwNzc2IEw5LjQ2NDQxNTU0LDYuODY4NjM1MDUgTDcuMTQ2NjE4ODUsOC43MzAwODI5IEwxOC4wMDc5MTA5LDE3LjI5NDEzNDUgTDI4Ljg3ODM3NDIsOC43MjI0OTI5IEwyNi41NjA1Nzc1LDYuODYxMDQ1MDUgTDE4LjAwNzkxMDksMTMuNjA1MDc3NiBaIiBpZD0iRmlsbC0xLUNvcHkiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="掘金" class="mobile" data-v-20709686></a> <nav role="navigation" class="main-nav" data-v-20709686><ul class="nav-list" data-v-20709686><li class="main-nav-list" data-v-20709686><div class="phone-show-menu" data-v-20709686><span data-v-20709686>首页</span> <div class="icon ion-arrow-down-b" data-v-20709686></div></div> <ul class="phone-hide" data-v-20709686><li class="nav-item link-item route-active" data-v-20709686><a href="/" data-v-20709686>首页</a></li> <li class="nav-item link-item activities" data-v-20709686><a href="/pins" data-v-20709686>沸点</a></li> <li class="nav-item link-item" data-v-20709686><a href="/topics" data-v-20709686>话题</a></li> <li class="nav-item link-item book" data-v-20709686><a href="/books" data-v-20709686>小册</a></li> <li class="nav-item link-item" data-v-20709686><a href="/events/all" data-v-20709686>活动</a></li></ul></li> <li class="nav-item search" data-v-20709686><form role="search" class="search-form" data-v-20709686><input type="search" maxlength="32" placeholder="探索掘金" value="" class="search-input" data-v-20709686> <img src="//s3.pstatp.com/toutiao/xitu_juejin_web/img/juejin-search-icon.6f8ba1b.svg" alt="搜索" class="search-icon" data-v-20709686></form></li> <li class="nav-item add" data-v-20709686><div class="add-group" data-v-20709686><button class="add-btn" data-v-20709686>写文章</button> <div class="more" data-v-20709686><i class="more-icon ion-android-arrow-dropdown" data-v-20709686></i></div> <ul class="more-list" data-v-20709686><li class="item" data-v-20709686>发布沸点</li> <!----></ul></div> <!----></li> <!----> <!----> <li class="nav-item auth" data-v-20709686><button class="login-button" data-v-20709686>登录</button></li></ul></nav></div></header></div>  <main class="container main-container" style="max-width:;" data-v-6a3e47cf><div class="view column-view" data-v-6a3e47cf data-v-d6ec2d02><div class="main-area article-area shadow" data-v-6a3e47cf data-v-d6ec2d02><article itemscope="itemscope" itemtype="http://schema.org/Article" data-entry-id="6881395120617291783" data-draft-id="6881118133541666823" class="article" data-v-d6ec2d02><!----> <meta itemprop="headline" content="适合Vue用户的React教程，你值得拥有"> <meta itemprop="keywords" content="React.js,Vue.js"> <meta itemprop="datePublished" content="2020-10-08T23:40:14.000Z"> <meta itemprop="image" content="https://b-gold-cdn.xitu.io/icon/icon-128.png"> <div itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person"><meta itemprop="name" content="前端进击者"> <meta itemprop="url" content="https://juejin.im/user/2858385961407853"></div> <div itemprop="publisher" itemscope="itemscope" itemtype="http://schema.org/Organization"><meta itemprop="name" content="掘金"> <div itemprop="logo" itemscope="itemscope" itemtype="https://schema.org/ImageObject"><meta itemprop="url" content="https://b-gold-cdn.xitu.io/icon/icon-white-180.png"> <meta itemprop="width" content="180"> <meta itemprop="height" content="180"></div></div> <div class="author-info-block" data-v-d6ec2d02><a href="/user/2858385961407853" target="_blank" rel="" class="avatar-link" data-v-d6ec2d02><div data-src="https://user-gold-cdn.xitu.io/2020/7/11/1733c56f84384f0f?imageView2/1/w/100/h/100/q/85/interlace/1" class="lazy avatar avatar" style="background-image:none;" data-v-47cc2604 data-v-1c418ef0 data-v-d6ec2d02></div></a> <div class="author-info-box" data-v-d6ec2d02><!----> <div class="meta-box" data-v-d6ec2d02><time datetime="2020-10-08T23:40:14.000Z" title="Fri Oct 09 2020 07:40:14 GMT+0800 (China Standard Time)" class="time" data-v-d6ec2d02>
</style>
