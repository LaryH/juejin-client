module.exports = {
  lintOnSave: false,
  devServer: {
    port: "",
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/juejin": {
        // 匹配所有以 '/dev-api'开头的请求路径
        target: "https://apinew.juejin.im", // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { "^/juejin": "" },
      },
      "/zhuanfa": {
        target: "http://localhost:6666", // 代理目标的基础路径
        changeOrigin: true, // 支持跨域,
        pathRewrite: {
          "^/zhuanfa": "",
        },
      },
      // 登录接口，转发到商城
      "/api": {
        target: "http://182.92.128.115/",
      },
      "/post": {
        target: "https://juejin.im/",
        changeOrigin: true, // 支持跨域,
      },
    },
  },
};
