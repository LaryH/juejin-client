import request from "@/utils/request";

export default {
  // 获取轮播图
  getEventsBanner() {
    return request({
      url: "/tag_api/event_api/v1/event/banner_list",
      method: "GET",
    });
  },

  // 获取event列表
  getEventList(eventListParams) {
    console.log(eventListParams);
    return request({
      url: "/test",
      method: "GET",
      // url: "/tag_api/event_api/v1/event/event_list",
      // method: "POST",
      data: eventListParams,
    });
  },
};
