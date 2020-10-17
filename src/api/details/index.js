import request from "@/utils/request";

export default {
  getPost(articleId) {
    console.log();
    return request({
      url: `post/${articleId}`,
      method: "GET",
    });
  },
};
