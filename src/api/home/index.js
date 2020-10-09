import request from "@/utils/request";
export default {
  // 请求首页二级路由列表
  getCategoryBriefs() {
    return request({
      url: "/tag_api/v1/query_category_briefs?show_type=0",
      method: "GET",
    });
  },
  getRecommendTagList(){
    
  }
};
