<template>
  <div>
    <main class="events-container">
      <div class="events-container-box">
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
        </div>
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
      img {
        width: 100%;
        height: 100%;
      }
    }
    .calendar {
      flex-shrink: 0;
      width: 475px;
      margin-left: 15px;
      position: relative;
      /deep/.wh_container {
        width: 100%;
        margin: 0 auto;
      }
      /deep/.wh_content_all {
        background-color: white;
      }
    }
  }
}
</style>
