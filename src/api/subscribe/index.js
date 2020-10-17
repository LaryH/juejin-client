import request from "@/utils/request";

export default {
  getFollow() {
    return request({
      url: "/zhuanfa/interact_api/v1/follow/tag_list",
      method: "post",
      //   data,
    });
  },
};
