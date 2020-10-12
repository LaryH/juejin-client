<template>
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
                      <img :src="home.author_user_info.avatar_large" alt="" class="lazy avatar avatar loaded" />
                    </a>
                  </div>
                  <!-- 用户名字和信息 -->
                  <div class="pin-header-content">
                    <div class="user-popover">
                      <a href="" class="username">{{
                          home.author_user_info.user_name
                        }}</a>
                    </div>
                    <div class="meta-box">
                      <div class="position ellipsis">
                        {{ home.author_user_info.job_title }}
                      </div>
                      <div class="dot">
                        @{{ home.author_user_info.company }}.
                      </div>
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
                  <span>{{ home.msg_Info.content }}</span>
                </div>
              </div>
              <!-- 图片 -->
              <div class="pin-image-row">
                <div class="image-box-wrapper image-box">
                  <div class="image-box">
                    <!--    <div class="image"></div> -->
                    <template v-if="home.msg_Info.pic_list.length > 0">
                      <img v-for="(img, index) in home.msg_Info.pic_list" :src="home.msg_Info.pic_list[index]" alt="" class="image" :key="index" />
                    </template>
                  </div>
                </div>
              </div>
              <!-- 添加的标签 -->
              <div class="pin-topic-row">
                <a href="javascript" class="topic-title" v-if="home.topic.title">{{ home.topic.title }}</a>
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
</template>

<script>
export default {
  data() {
    return {
      info: {
        cursor: '0',
        id_type: 4,
        limit: 3,
        sort_type: 400
      },
      homelist: {},
      addlist:[]
    }
  },
  mounted() {
    this.gethomes(this.info)
    this.$bus.$on('add', this.add)
  },
  methods: {
    async gethomes(info) {
      const result = await this.$API.pins.gethome(info)
      this.homelist = result.data
    },

    async add(info) {
      let adds = []
      const result = await this.$API.pins.gethome(info)
      this.addlist = result.data
      adds = [...this.homelist, ...this.addlist]
      this.homelist = adds
     
    }
  }
}
</script>

<style lang="less" scoped>
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
</style>