module.exports = {
  lintOnSave: false,
  devServer: {
    port: "",
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/dev-api": {
        // 匹配所有以 '/dev-api'开头的请求路径
        target: "http://182.92.128.115", // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: {
          // 重写路径: 去掉路径中开头的'/dev-api'
          "^/dev-api": "",
        },
      },
    },
  },
};
