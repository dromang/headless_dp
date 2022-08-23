const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = {
  target: "http://dp.docker.localhost",
  changeOrigin: true,
};

module.exports = function (app) {
  app.use("/jsonapi/node/hiberus", createProxyMiddleware(proxy));
};
