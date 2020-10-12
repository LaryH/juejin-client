import request from "@/utils/request";

export default {
  // 获取轮播图
  getEventsBanner() {
    return request({
      url: "/juejin/event_api/v1/event/banner_list",
      method: "GET",
    });
  },

  // 获取event列表
  getEventList(eventListParams) {
    return request({
      // url: "/test",
      // method: "GET",
      url: "/zhuanfa/event_api/v1/event/event_list",
      method: "POST",
      data: eventListParams,
    });
  },

  // 获取citys列表
  getCitysBanner() {
    return request({
      url: "/juejin/event_api/v1/event/citys",
      method: "GET",
    });
  },
};
