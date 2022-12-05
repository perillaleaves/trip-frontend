const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/login", {
      target: "http://192.168.35.126:8080",
      changeOrigin: true,
    })
  );
};
