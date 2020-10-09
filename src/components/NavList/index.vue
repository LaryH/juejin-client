<template>
  <div>
    <nav class="view-nav">
      <ul class="nav-list left">
        <li class="nav-item">
          <div class="category-popover-box">
            <a href="#">推荐</a>
          </div>
        </li>
        <li
          class="nav-item"
          v-for="item in categoryList"
          :key="item.category_id"
        >
          <div>
            <a href="#" @click.prevent="get">{{ item.category_name }}</a>
          </div>
        </li>
        <li class="nav-item right" @click.prevent="toSubscribe">
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "NavList",
  data() {
    return {
      categoryList: [],
    };
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    async getCategoryList() {
      const result = await this.$API.home.getCategoryBriefs();
      if (result.err_msg === "success") {
        this.categoryList = result.data;
      }
    },
    toSubscribe() {
      this.$router.push({ path: "subscribe" });
    },
    get() {},
  },
};
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
}
.nav-item > a::before {
  content: "标签管理";
  position: absolute;
  top: 15.1px;
  right: 480px;
  bottom: 0;
}
</style>
