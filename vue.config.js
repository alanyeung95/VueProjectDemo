const config = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    clientLogLevel: 'trace',
    proxy: {}
  }
}

config.devServer.proxy['^/api/'] = {
  // using docker-compose network
  target: 'http://app.demo.network/',
  secure: false,
  pathRewrite: {
    '/api/*': '/'
  }
}

config.devServer.proxy['^/search/'] = {
  // using docker-compose network
  target: 'http://elasticsearch.demo.network:9200/',
  secure: false,
  pathRewrite: {
    '/search/*': '/'
  }
}

module.exports = config
