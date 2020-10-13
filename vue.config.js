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
        target: "http://192.168.26.25:3000", // 代理目标的基础路径
        changeOrigin: true, // 支持跨域,
        pathRewrite: {
          "^/zhuanfa": "",
        },
      },
    },
  },
};
