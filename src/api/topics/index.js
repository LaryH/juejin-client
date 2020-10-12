import request from "@/utils/request";

export default {
  // 获取话题列表
  getTopicList(topicListParams) {
    return request({
      url: "/zhuanfa/tag_api/v1/query_topic_list",
      method: "POST",
      data: topicListParams,
    });
  },
};
