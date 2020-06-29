const config = {
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true,
    clientLogLevel: "trace",
    proxy: {}
  }
};

config.devServer.proxy["^/api/"] = {
  // using docker-compose network
  target: "http://app.demo.network/",
  secure: false,
  pathRewrite: {
    "/api/*": "/"
  }
};

module.exports = config;
