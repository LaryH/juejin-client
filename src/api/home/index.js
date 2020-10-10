import request from "@/utils/request";
export default {
  // 请求首页二级路由列表
  getCategoryBriefs() {
    return request({
      url: "/juejin/tag_api/v1/query_category_briefs?show_type=0",
      method: "GET",
    });
  },

  getRecommendTagList(categoryId) {
    return request({
      url: "/zhuanfa/recommend_api/v1/tag/recommend_tag_list",
      method: "get",
      data: {
        cate_id: categoryId,
      },
    });
  },
  // 文章列表
  getRecommendFeed(categoryId, tagId) {
    return request({
      url: "/zhuanfa/recommend_api/v1/article/recommend_cate_tag_feed",
      method: "get",
      data: {
        cate_id: categoryId,
        cursor: "0",
        id_type: 2,
        limit: 20,
        sort_type: 200,
        tag_id: tagId,
      },
    });
  },

  // 首页推荐作者列表
  getRecommendAuthor(categoryId) {
    return request({
      url: `/juejin/user_api/v1/author/recommend?category_id=${categoryId}&cursor=0&limit=20`,
      method: "get",
    });
  },
};
