<template>
  <div>
    <nav class="view-nav">
      <ul class="nav-list left">
        <li class="nav-item">
          <div class="category-popover-box">
            <a href="#">推荐</a>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">后端</a>
            <div class="category-popover">
              <nav class="tag-nav">
                <ul class="tag-list">
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">前端</a>
            <div class="category-popover">
              <nav class="tag-nav">
                <ul class="tag-list">
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                  <li class="tag">
                    <a href="">java</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">Android</a>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">iOS</a>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">人工智能</a>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">开发工具</a>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">代码人生</a>
          </div>
        </li>
        <li class="nav-item">
          <div>
            <a href="#">阅读</a>
          </div>
        </li>
        <li class="nav-item right">
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Container from '@/components/Container'
export default {
  name: 'NavList'
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
.view-nav {
  top: 4.1rem;
  width: 100%;
  height: 45px;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  transform: translateZ(0);
  background-color: #fff;
}
.view-nav .nav-list {
  display: flex;
  max-width: 960px;
  height: 100%;
  margin: auto;
  align-items: center;
  line-height: 1;
}
.view-nav .nav-list .nav-item {
  height: 100%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  font-size: 1.16rem;
  color: #71777c;
  padding: 0 1rem;
  // position: relative;
}
.nav-item > a::before {
  content: '标签管理';
  position: absolute;
  top: 15.1px;
  right: 480px;
  bottom: 0;
  z-index: 20;
}
.nav-item .category-popover {
  display: none;
  width: 329px;
  height: 144px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 2px;
  padding: 14px 14px 2px 14px;
  position: absolute;
  top: 45px;
}
.nav-item .category-popover .tag-nav .tag-list {
  display: flex;
  flex-wrap: wrap;
}
.nav-item .category-popover .tag-nav .tag-list .tag {
  margin: 0 12px 12px 0;
  padding: 0 10px;
  background-color: #f4f5f5;
  border-radius: 1rem;
  font-size: 1.1rem;
  color: #71777d;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
}
.nav-item:hover .category-popover {
  display: block;
}
</style>
