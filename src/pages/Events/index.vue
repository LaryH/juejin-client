<template>
  <div>
    <main class="events-container">
      <div class="events-container-box">
        <!-- 导航 -->
        <nav class="events-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="" class="active">热门活动</a>
            </li>
            <li class="nav-item">
              <a href="">北京</a>
            </li>
            <li class="nav-item">
              <a href="">上海</a>
            </li>
            <li class="nav-item">
              <a href="">广州</a>
            </li>
            <li class="nav-item">
              <a href="">杭州</a>
            </li>
            <li class="nav-item more-city">
              <div class="text">
                <span>其他</span>
              </div>
              <div class="menu"></div>
            </li>
            <li class="nav-item right">
              <a href="">活动合作</a>
            </li>
          </ul>
        </nav>
        <!-- 内容 -->
        <div class="events-content">
          <div class="panel">
            <!-- 轮播图 -->
            <div class="banner">
              <div class="swiper-container" ref="banner">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="./images/banner01.png" alt="" />
                  </div>
                  <div class="swiper-slide">
                    <img src="./images/banner02.png" alt="" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <!-- 日历 -->
            <div class="calendar">
              <Calendar></Calendar>
            </div>
          </div>
          <!-- 内容卡片 -->
          <div class="events-wrap">
            <div class="eventsList">
              <a
                href="https://pingcap.com/community-cn/high-performance-tidb-challenge/?utm_source=ad&utm_medium=juejin&utm_campaign=xnds"
                class="events"
              >
                <div class="events-inner">
                  <div
                    class="banner"
                    style="background-image: url('https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a2686aca054004910fcb8e8bb1a67f~tplv-k3u1fbpfcp-zoom-1.image'); background-size: cover"
                  ></div>
                  <div class="message">
                    <div class="title">TiDB 性能竞赛</div>
                    <div class="date">
                      <span class="icon icon-calendar"></span>
                      <span>09-17 周四</span>
                    </div>
                    <div class="bottom">
                      <div class="address">
                        <span class="icon icon-location"></span>
                        <span>不限</span>
                      </div>
                      <div class="btn-join">报名参加</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://pingcap.com/community-cn/high-performance-tidb-challenge/?utm_source=ad&utm_medium=juejin&utm_campaign=xnds"
                class="events"
              >
                <div class="events-inner">
                  <div
                    class="banner"
                    style="background-image: url('https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a2686aca054004910fcb8e8bb1a67f~tplv-k3u1fbpfcp-zoom-1.image'); background-size: cover"
                  ></div>
                  <div class="message">
                    <div class="title">TiDB 性能竞赛</div>
                    <div class="date">
                      <span class="icon icon-calendar"></span>
                      <span>09-17 周四</span>
                    </div>
                    <div class="bottom">
                      <div class="address">
                        <span class="icon icon-location"></span>
                        <span>不限</span>
                      </div>
                      <div class="btn-join">报名参加</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://pingcap.com/community-cn/high-performance-tidb-challenge/?utm_source=ad&utm_medium=juejin&utm_campaign=xnds"
                class="events"
              >
                <div class="events-inner">
                  <div
                    class="banner"
                    style="background-image: url('https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a2686aca054004910fcb8e8bb1a67f~tplv-k3u1fbpfcp-zoom-1.image'); background-size: cover"
                  ></div>
                  <div class="message">
                    <div class="title">TiDB 性能竞赛</div>
                    <div class="date">
                      <span class="icon icon-calendar"></span>
                      <span>09-17 周四</span>
                    </div>
                    <div class="bottom">
                      <div class="address">
                        <span class="icon icon-location"></span>
                        <span>不限</span>
                      </div>
                      <div class="btn-join">报名参加</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://pingcap.com/community-cn/high-performance-tidb-challenge/?utm_source=ad&utm_medium=juejin&utm_campaign=xnds"
                class="events"
              >
                <div class="events-inner">
                  <div
                    class="banner"
                    style="background-image: url('https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a2686aca054004910fcb8e8bb1a67f~tplv-k3u1fbpfcp-zoom-1.image'); background-size: cover"
                  ></div>
                  <div class="message">
                    <div class="title">TiDB 性能竞赛</div>
                    <div class="date">
                      <span class="icon icon-calendar"></span>
                      <span>09-17 周四</span>
                    </div>
                    <div class="bottom">
                      <div class="address">
                        <span class="icon icon-location"></span>
                        <span>不限</span>
                      </div>
                      <div class="btn-join">报名参加</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://pingcap.com/community-cn/high-performance-tidb-challenge/?utm_source=ad&utm_medium=juejin&utm_campaign=xnds"
                class="events"
              >
                <div class="events-inner">
                  <div
                    class="banner"
                    style="background-image: url('https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a2686aca054004910fcb8e8bb1a67f~tplv-k3u1fbpfcp-zoom-1.image'); background-size: cover"
                  ></div>
                  <div class="message">
                    <div class="title">TiDB 性能竞赛</div>
                    <div class="date">
                      <span class="icon icon-calendar"></span>
                      <span>09-17 周四</span>
                    </div>
                    <div class="bottom">
                      <div class="address">
                        <span class="icon icon-location"></span>
                        <span>不限</span>
                      </div>
                      <div class="btn-join">报名参加</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <footer class="events-footer">
          <span>©2020 掘金</span>
          <span class="line">|</span>
          <a href="http://www.beian.miit.gov.cn" target="_blank"
            >津ICP备15003202号-2</a
          >
          <span class="line">|</span>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719"
            target="_blank"
          >
            京公网安备11010802026719号
          </a>
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
// 轮播图
import Swiper from "swiper";
// 日历
import Calendar from "vue-calendar-component";

export default {
  name: "Events",
  components: {
    Calendar,
  },
  mounted() {
    // 轮播图
    new Swiper(this.$refs.banner, {
      // 循环模式选项
      loop: true,
      // 下面的小圆点
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // 小圆点点击
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 自动轮播
      autoplay: {
        disableOnInteraction: false, // 用户操作后，还可自动切换
      },
    });
  },
};
</script>

<style lang="less" scoped>
.events-container {
  position: relative;
  top: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.events-container-box {
  margin-top: 4.67rem;
}

.events-nav {
  background: #fff;
  height: 46px;
  line-height: 46px;
  .nav-item {
    float: left;
    height: 100%;
    align-items: center;
    font-size: 1.16rem;
    color: #71777c;
    padding: 0 1rem;
    &:first-child {
      padding: 0 1rem 0 0;
    }
    &.right {
      float: right;
      padding: 0 0 0 1rem;
    }
    .active {
      color: #007fff;
    }
  }
  .more-city {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      left: 45px;
      top: 50%;
      transform: translateY(-50%);
      border-color: #72777b transparent transparent;
      border-style: solid;
      border-width: 6px 6px 0;
    }
  }
}

.events-content {
  min-height: calc(100vh - 188px);
  .panel {
    height: 280px;
    display: flex;
    .banner {
      flex-shrink: 0;
      width: 470px;
      min-width: 320px;
      height: 280px;
      .swiper-container {
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .calendar {
      flex-shrink: 0;
      width: 475px;
      height: 280px;
      margin-left: 15px;
      position: relative;
      overflow: hidden;
      /deep/.wh_container {
        max-width: 100%;
      }
      /deep/.wh_content_all {
        background-color: #007fff;
        max-height: 280px !important;
      }
      /deep/.wh_content_item .wh_isToday {
        background: #ccc;
        // border-radius: 100px;
      }
    }
  }

  .eventsList {
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    .events {
      width: 25%;
      padding-left: 7px;
      padding-right: 7px;
      box-sizing: border-box;
      position: relative;
      margin-bottom: 30px;
      &::after {
        content: "";
        position: absolute;
        left: 7px;
        right: 7px;
        top: 0;
        bottom: 0;
        z-index: -1;
        /* border-radius: 2px; */
        /* overflow: hidden; */
        background-color: #fff;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
      }
    }
    .events {
      width: 25%;
    }
    .events-inner {
      color: #333;
      width: 100%;
      .banner {
        width: 100%;
        height: 135px;
      }
      .message {
        padding: 20px 12px 15px;
        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          height: 40px;
          font-size: 14px;
          font-weight: 700;
        }
        .date {
          margin-top: 6px;
          span {
            vertical-align: middle;
          }
        }
        .bottom {
          margin-top: 6px;
          display: flex;
          justify-content: space-between;
          .address {
            display: flex;
            align-items: center;
            span {
              vertical-align: middle;
            }
          }
          .btn-join {
            width: 100px;
            height: 25px;
            border-radius: 30px;
            background-color: #4d91fd;
            line-height: 25px;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
}

.events-footer {
  text-align: center;
  font-size: 14px;
  opacity: 0.7;
  color: #3a4e64;
  margin-bottom: 40px;
  .line {
    margin: 0 5px;
  }
}
</style>
