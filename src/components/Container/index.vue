<template>
  <div class="timeline-entry-list">
    <div class="entry-list-container">
      <header class="list-header">
        <nav class="list-nav">
          <ul class="nav-list-left">
            <li class="nav-item active">
              <a href>热门</a>
            </li>
            <li class="nav-item">
              <a href>最新</a>
            </li>
            <li class="nav-item">
              <a href>热榜</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="entry-list-wrap">
        <ul class="entry-list">
          <li
            class="item"
            v-for="art in articleList"
            :key="art.article_id"
            @click="window.location = `https://juejin.im/${art.article_id}`"
          > 
            <div class="entry-link">
              <div class="content-box">
                <div class="info-box">
                  <ul class="meta-list">
                    <li class="item username clickable">
                      <a style="color: #b2bac2"
                        >{{ art.author_user_info.user_name }} .</a
                      >
                    </li>
                    <li class="item">
                      {{
                        calcTime(art.article_info.ctime, art.article_info.mtime)
                      }}
                    </li>
                    <li class="item tag">
                      <a style="color: #b2bac2">{{
                        art.category.category_name
                      }}</a>
                    </li>
                  </ul>
                  <div class="info-row title-row">
                    <span>
                      <router-link :to="'/detail'" class="title">{{
                        art.article_info.title
                      }}</router-link>
                      <!-- <a class="title">{{ art.article_info.title }}</a> -->
                    </span>
                  </div>
                  <div class="action-list">
                    <div class="item like clickable">
                      <a href>
                        <img src="./images/04.svg" alt />
                        <span class="count">
                          {{ art.article_info.digg_count }}
                        </span>
                      </a>
                    </div>
                    <div class="item like clickable">
                      <a href>
                        <img src="./images/03.svg" alt />
                        <span class="count"
                          >{{ art.article_info.comment_count }}
                        </span>
                      </a>
                    </div>
                    <div class="item like clickable">
                      <a href>
                        <img src="./images/02.svg" alt />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="info-box-img">
                  <img :src="art.author_user_info.avatar_large" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Sidebar :categoryId="categoryId" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import calc from "@/utils/calcTime";
export default {
  name: "Container",
  components: {
    Sidebar,
  },
  props: ["categoryId", "tagId"],
  data() {
    return {
      // categoryId:  || "",
      // tagId:  || "",
      articleList: [],
      oldTagId: "",
    };
  },
  props: [""],
  mounted() {
    this.getFeed();
  },
  methods: {
    async getFeed() {
      if (this.tagId && this.oldTagId !== this.tagId) {
        const result = await this.$API.home.getRecommendTagFeed(
          this.categoryId,
          this.tagId
        );
        if (result.err_msg === "success") {
          this.articleList = result.data;
        }
      } else {
        const result = await this.$API.home.getRecommendFeed(this.categoryId);
        if (result.err_msg === "success") {
          this.articleList = result.data;
        }
      }
      this.oldTagId = this.tagId;
    },

    calcTime(ctime, mtime) {
      return calc(ctime, mtime);
    },

    // toPost(articleId) {
    //   this.$router.push({ path: "/detail", params: { articleId } });
    // },
  },
  computed: {
    categoryId() {
      return this.$route.query.categoryId;
    },
    tagId() {
      return this.$route.query.tagId;
    },
  },
  watch: {
    $route: "getFeed",
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
.timeline-entry-list {
  width: 960px;
  // 居中
  position: absolute;
  left: 0;
  right: 0;
  margin: 10px auto;
  z-index: -1;

  .entry-list-container {
    width: 700px;
    height: 100%;
    background-color: #fff;
    margin-right: auto;
    .list-header {
      padding: 1.3rem 1rem;
      border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.2);
      display: block;
      display: flex;
      .list-nav {
        width: 676px;
        height: 14px;
        font-size: 12px;
        line-height: normal;
        .nav-list-left {
          list-style: none;
          .nav-item {
            display: block;
            float: left;
            padding: 0 1.2rem;
            border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
            a {
              text-decoration: none;
              cursor: pointer;
            }
          }
        }
      }
    }
    .entry-list-wrap {
      height: 100%;
      background-color: #fff;
      .entry-list {
        width: 100%;
        background-color: #fff;
        li {
          // height: 115px;
          border-bottom: 1px solid rgba(178, 186, 194, 0.15);
          .entry-link {
            display: block;
            .content-box {
              width: 652px;
              height: 79px;
              display: flex;
              align-items: center;
              padding: 1.5rem 2rem;
              // display: block;
              display: flex;
              justify-content: center;
              .info-box {
                width: 568px;
                height: 79px;
                // background-color: black;
                margin-right: 22px;
              }
              .title-row {
                margin: 0.5rem 0 1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 20px;
                .title {
                  font-size: 1.4rem;
                  font-weight: 600;
                  line-height: 1.2;
                  color: #2e3135;
                }
              }
              .meta-list {
                list-style: none;
                width: 568px;
                height: 15px;
                display: flex;
                .item {
                  display: inline;
                  content: "";
                  margin: 0 0.4em;
                  color: #b2bac2;
                }
              }
              .action-list {
                // width: 136px;
                height: 26px;
                // background-color: aqua;

                .item {
                  width: 30px;
                  float: left;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  padding: 0 0.8rem;
                  height: 2rem;
                  font-size: 1.083rem;
                  line-height: 1;
                  white-space: nowrap;
                  color: #b2bac2;
                  border-radius: 1px;
                  border: 1px solid #edeeef;

                  img {
                    width: 16px;
                    height: 16px;
                    margin-bottom: -2px;
                  }
                  .art_comment {
                  }

                  .count {
                    color: #b2bac2;
                    margin-left: 0.2em;
                    font-weight: 700;
                  }
                }
                // .action-list:not(.active) > .item.hover {
                //   visibility: hidden;
                // }
              }
              .info-box-img > img {
                display: inline-table;
                width: 60px;
                height: 60px;
                background: blue;
                margin-bottom: 8px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
