<template>
  <div class="container">
    <!-- 左侧导航栏 -->
    <div class="dock">
      <nav class="dock-nav" role="navigation">
        <ul class="nav-list">
          <li class="nav-item one active">
            <a href="javascript:;">推荐</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">热门</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">关注</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">上班摸鱼</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">内推招聘</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">一图胜千言</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">今天学到了</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">每天一到...</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;">开发工具</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 内容区 -->
    <div class="stream">
      <div class="stream-wrapper">
        <div class="pin-list-view">
          <ul class="pin-list">
            <li class="item shadow" v-for="home in homelist" :key="home.msg_id">
              <div class="pin">
                <!-- 头部 -->
                <div class="pin-header-row">
                  <div class="account-group">
                    <!-- 图片 -->
                    <div class="user-popover-box">
                      <a href="javascript:;" class="user-link">
                        <!--  <img class="lazy avatar avatar loaded"></div> -->
                        <img :src="home.author_user_info.avatar_large" alt="" class="lazy avatar avatar loaded">
                      </a>
                    </div>
                    <!-- 用户名字和信息 -->
                    <div class="pin-header-content">
                      <div class="user-popover">
                        <a href="" class="username">{{home.author_user_info.user_name}}</a>
                      </div>
                      <div class="meta-box">
                        <div class="position ellipsis">{{home.author_user_info.job_title}}</div>
                        <div class="dot">@{{home.author_user_info.company}}.</div>
                        <a href="javascript">9小时前</a>
                      </div>
                    </div>
                  </div>
                  <div class="header-action">
                    <button class="subscribe-btn follow-button">
                      <span>关注</span>
                    </button>
                  </div>
                </div>
                <!-- 标间 -->
                <div class="pin-content-row">
                  <div class="content-box content-box">
                    <span>{{home.msg_Info.content}}</span>
                  </div>
                </div>
                <!-- 图片 -->
                <div class="pin-image-row">
                  <div class="image-box-wrapper image-box">
                    <div class="image-box">
                      <!--    <div class="image"></div> -->
                      <template v-if="home.msg_Info.pic_list.length > 0">
                        <img v-for="(img,index) in home.msg_Info.pic_list" :src="home.msg_Info.pic_list[index]" alt="" class="image" :key="index">
                      </template>

                    </div>

                  </div>
                </div>
                <!-- 添加的标签 -->
                <div class="pin-topic-row">
                  <a href="javascript" class="topic-title" v-if="home.topic.title">{{home.topic.title}}</a>
                </div>
                <!-- 标签底部 -->
                <div class="pin-action-row">
                  <div class="action-box action-box">
                    <div class="like-action action">
                      <span class="iconfont icon-dianzan"></span>
                      <span>2</span>
                    </div>
                    <div class="like-action action">
                      <span class="iconfont icon-pinglun_huabanfuben"></span>
                      <span>评论</span>
                    </div>
                    <div class="like-action action">
                      <span class="iconfont icon-shangchuan"></span>
                      <span>分享</span>
                    </div>

                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <!-- 右侧导航 -->
    <div class="pin__side sidebar">
      <div class="related-pin-block pin-block">
        <header class="">推荐浮点</header>
        <ul class="pin-list">
          <li class="item" v-for="left in leftnav" :key="left.msg_id">
            <a href="javascript:;" class="pin">
              <div class="content-box">
                <div class="content with-picture">
                  {{left.msg_Info.content}}
                </div>
                <div class="stat">
                  <span>3 赞 .</span>
                  <span>22 评论</span>
                </div>
              </div>
              <img :src="left.msg_Info.pic_list[0]" alt="" class="image-box" v-if="left.msg_Info.pic_list.length>0">
              <!--  <div class="image-box" style="{background-image:url('')}"></div> -->
            </a>
          </li>

        </ul>
      </div>
      <a href="javascript" class="guide-link shadow">
        <img src="./img/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgd.svg" alt="" class="icon">
        <span class="title">如何玩转沸点</span>
      </a>
    </div>
  </div>
</template>

<script>
import data from './data.json'
import home from './home.json'
export default {
  name: 'Pins',
  data() {
    return {
      info: {
        cursor: '0',
        id_type: 4,
        limit: 3,
        sort_type: 400
      },
      leftnav: {},
      homelist: {}
    }
  },
  created() {
    //使用window.onscroll = function(){}this指向出现问题
    //故应该使用箭头函数，因为箭头函数无this，会从上一级找，故会找到vue实例的this
    window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
      //滚动条到底部的条件(距底部20px时触发加载)
      if (
        scrollTop + windowHeight >= scrollHeight - 20 &&
        !this.isAchiveBottom &&
        !this.noMore
      ) {
        // console.log(
        //   "距顶部" +
        //     scrollTop +
        //     "可视区高度" +
        //     windowHeight +
        //     "滚动条总高度" +
        //     scrollHeight
        // );
        this.isAchiveBottom = true
     
      }
    }
  },

  mounted() {
    this.getinfo()
    this.getinfos(this.info)
    this.gethomes(this.info)
  },
  methods: {
    getinfo() {
      //  const result = await this.$API.pins.gethot(info)
      //  if(result.code===200){
      //     console.log(result.data)
      //  }
      this.leftnav = data.data
      this.homelist = home.data
    },
    async getinfos(info) {
      const result = await this.$API.pins.gethot(info)
      console.log(result)
      this.leftnav = result.data
    },
    async gethomes(info) {
      const result = await this.$API.pins.gethome(info)
      this.homelist = result.data
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  display: flex;
  width: 960px;
  height: 1800px;
  margin: 0 auto;

  background-color: #f4f5f5;
  margin-top: 20px;
  margin-bottom: 72px;
  position: relative;
  .dock {
    width: 112px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    .dock-nav {
      background-color: #ffffff;
      border-radius: 2px;

      position: fixed;
      left: 280px;
      top: 80px;
      .nav-list {
        display: flex;
        flex-direction: column;
        padding: 16px 12px;
        .nav-item {
          padding: 0 6px;
          text-align: center;
          max-width: 100%;
          height: 31px;
          line-height: 31px;
          color: #909090;
          margin-top: 10px;
          &.one {
            margin-top: 0px;
          }
        }
        .active {
          color: white;
          background-color: #007fff;
          border-radius: 2px;
          a {
            color: white;
          }
        }
      }
    }
  }
  .stream {
    width: 570px;

    margin-right: 15px;
    .stream-wrapper {
      background-color: #ffffff;
      .pin-list-view {
        .pin-list {
          .item {
            margin-bottom: 8px;
            border: 1px solid #ebebeb;
            .pin {
              .pin-header-row {
                display: flex;
                padding: 16px 24px 0 20px;
                justify-content: space-between;
                align-items: center;
                // background-color: yellow;
                .account-group {
                  display: flex;
                  justify-items: center;
                  .user-popover-box {
                    width: 45px;
                    height: 48px;

                    .user-link {
                      .lazy {
                        //
                        display: block;
                        width: 45px;
                        height: 45px;
                        border-radius: 50%;

                        background-size: 45px;
                      }
                    }
                  }
                  .pin-header-content {
                    margin-left: 12px;
                    .user-popover {
                      margin-top: 4px;
                      .username {
                        color: #2e3135;
                        font-weight: 600;
                      }
                    }
                    .meta-box {
                      margin-top: 4px;
                      .position {
                        display: inline;
                      }
                      .dot {
                        display: inline;
                      }
                    }
                  }
                }
                .header-action {
                  .subscribe-btn {
                    outline: none;
                    border: 0 none;
                    width: 55px;
                    height: 26px;
                    font-size: 13px;
                    border-color: #6cbd45;
                    color: #6cbd45;
                    padding: 0;
                    margin: 0 0 0 auto;
                    cursor: pointer;
                  }
                }
              }
              .pin-content-row {
                margin: 5px 48px 5px 77px;
              }
              .pin-image-row {
                margin: 4px 48px 0 77px;
                .image-box-wrapper {
                  .image-box {
                    display: flex;
                    flex-wrap: wrap;
                    .image {
                      /*  */
                      display: block;
                      margin-top: 4px;
                      //background: url('../Pins/img/f433295fd091456ba9e55bde14cadb56_tplv-k3u1fbpfcp-zoom-1.jpg');
                      //background-repeat: no-repeat;
                      width: 120px;
                      height: 110px;
                      margin-right: 5px;
                    }
                  }
                }
              }
              .pin-topic-row {
                margin: 7px 48px 0 77px;
                .topic-title {
                  display: inline-block;
                  font-size: 13px;
                  padding: 0 12px;
                  border: 1px solid #007fff;
                  border-radius: 14px;
                  color: #007fff;
                }
              }
              .pin-action-row {
                .action-box {
                  display: flex;
                  margin-top: 16px;
                  border-top: 1px solid #ebebeb;
                  height: 34px;
                  text-align: center;
                  .like-action {
                    width: 190px;
                    height: 34px;
                    line-height: 34px;
                    &::after {
                      display: block;
                      position: relative;
                      top: -30px;
                      content: '';
                      width: 1px;
                      height: 24px;
                      background-color: #ebebeb;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .pin__side {
    width: 263px;
    height: 400px;
    position: fixed;
    right: 280px;
    background-color: #ffffff;
    .related-pin-block {
      border: 1px solid hsla(0, 0%, 59.2%, 0.1);
      margin-bottom: 8px;
      header {
        color: #2e3135;
        font-size: 13px;
        font-weight: 600;
        padding: 13px 16px;
        border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
      }
      .pin-list {
        padding: 0 16px;
        .item {
          padding: 12px 0;
          border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
          .pin {
            display: flex;
            text-decoration: none;
            justify-content: space-between;
            .content-box {
              width: 100px;
              .content {
                display: -webkit-box;
                color: #2e3135;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                overflow: hidden;
                -webkit-line-clamp: 2;
              }
              .stat {
                margin-top: 10px;
              }
            }
            .image-box {
              display: block;
              width: 68px;
              height: 68px;
              //background-color: skyblue;
              // background-image: url('../Pins/img/7b54f66b14ea45eeb84846dc34e11598_tplv-k3u1fbpfcp-zoom-1.png');
              background-size: cover;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
    .guide-link {
      display: flex;
      padding: 15px;
      align-items: center;
      margin-bottom: 8px;
      border: 1px solid hsla(0, 0%, 59.2%, 0.1);
      .icon {
        margin-right: 10px;
      }
    }
  }
}
</style>