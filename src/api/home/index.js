import request from "@/utils/request";
export default {
  // 请求首页二级路由列表
  getCategoryBriefs() {
    return request({
      url: "/tag_api/v1/query_category_briefs?show_type=0",
      method: "GET",
    });
  },
  getRecommendTagList(categoryId) {
    return request({
      url: "/recommend_api/v1/tag/recommend_tag_list",
      method: "POST",
      // headers: {
      //   cookie:
      //     "_ga=GA1.2.1231086687.1593575114; gr_user_id=809d8b61-6208-4bad-ba7c-caaa3a5391dd; Hm_lvt_93bbd335a208870aa1f296bcd6842e5e=1595240915,1595241259,1595844962,1596077991; MONITOR_WEB_ID=00df97d7-0ac4-43ed-8a34-5862168a9f86; passport_auth_status=ea635c925007bde0e1285bfd2e7995dc%2C84e67e4fbced503e3018730e047d51e6; _gid=GA1.2.1467069167.1602203909; passport_csrf_token=1d23b2accd3486da7feb0e6b37690f82; sid_guard=9ef46a8b20c304706dd355fd08a0ba10%7C1602241029%7C21600%7CFri%2C+09-Oct-2020+16%3A57%3A09+GMT; uid_tt=596d88927171a6e4600192feb87d1ec7; uid_tt_ss=596d88927171a6e4600192feb87d1ec7; sid_tt=9ef46a8b20c304706dd355fd08a0ba10; sessionid=9ef46a8b20c304706dd355fd08a0ba10; sessionid_ss=9ef46a8b20c304706dd355fd08a0ba10",
      //   origin: "https://juejin.im",
      // },
      data: {
        cate_id: categoryId,
      },
    });
  },
};
