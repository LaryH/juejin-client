import request from "@/utils/request";
export default {
  // 登录
  reqLogin(userInfo) {
    return request({
      url: "/zhuanfa/user/login",
      method: "POST",
      data: userInfo,
    });
  },

  // 退出登录
  reqLogout() {
    return request({
      url: "/api/user/passport/logout",
      method: "GET",
    });
  },
};
