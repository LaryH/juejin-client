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
          <div class="posi">
            <!-- <router-link :to="'/' + item.category_url">{{
              item.category_name
            }}</router-link> -->
            <i @click="getRecommendFeed(item.category_url, category_id)">{{
              item.category_name
            }}</i>
            <div class="category-popover">
              <nav class="tag-nav">
                <ul class="tag-list">
                  <li class="tag" v-for="tag in tagList" :key="tag.tag_id">
                    <!-- <router-link :to="'/' + item.category_url">
                      {{ tag.tag_name }}</router-link
                    > -->
                    <i
                      @click="
                        getRecommendFeed(
                          item.category_url,
                          item.category_id,
                          tag.tag_id
                        )
                      "
                      >{{ tag.tag_name }}</i
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </li>
        <li class="nav-item right" @click.prevent="toSubscribe">
          <a href="#"></a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NavList",
  data() {
    return {
      categoryList: [],
      categoryId: "",
      tagList: [],
      tagId: "",
    };
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    // 获取首页二级路由列表
    async getCategoryList() {
      const result = await this.$API.home.getCategoryBriefs();
      if (result.err_msg === "success") {
        this.categoryList = result.data;
        this.$router.addRoutes([
          {
            path: "/home",
            component: () => import("@/pages/Home"),
            children: [
              ...this.categoryList.map((item) => {
                return {
                  path: "/" + item.category_url,
                  // component: () => import(`@/pages/Home/${item.category_url}`),
                  component: () => import(`@/components/Container`),
                };
              }),
            ],
          },
        ]);
        this.categoryId =
          result.data !== null ? this.categoryList[0].category_id : "";
        this.getTagList(this.categoryId);
      }
    },
    // 获取首页二级路由tag列表
    async getTagList(categoryId) {
      const result = await this.$API.home.getRecommendTagList(categoryId);
      if (result.err_msg === "success") {
        this.tagList = result.data;
      }
      this.tagId = result.data !== null ? result.data[0].tag_id : "";
    },
    // 获取
    getRecommendFeed(categoryUrl, categoryId, tagId) {
      this.$router.push({
        path: `/${categoryUrl}`,
        query: {
          categoryId,
          tagId,
        },
      });
    },

    toSubscribe() {
      this.$router.push({ path: "subscribe" });
    },
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
  // position: relative;
}
.view-nav .nav-list .nav-item .posi {
  position: relative;
  i {
    cursor: pointer;
  }
}
.nav-item > a::before {
  content: "标签管理";
  position: absolute;
  top: 15.1px;
  right: 480px;
  bottom: 0;
  z-index: 20;
}
.nav-item .category-popover {
  position: absolute;
  top: 29px;
  left: 0;
  display: none;
  width: 350px;
  height: 160px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 2px;
  padding: 14px 14px 2px 14px;
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
  z-index: 100;
}
</style>
