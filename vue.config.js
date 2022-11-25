const { defineConfig } = require('@vue/cli-service')
const target = 'http://47.16.70.58/app'; // app

module.exports = defineConfig({
  publicPath: './',
  assetsDir: './',
  productionSourceMap: false,
  transpileDependencies: true,
  devServer: {
    port: '8091',
  //   open: true,
  //   disableHostCheck: true,
  //   proxy: {
  //     '/axio': {
  //       target,
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/axio': ''
  //       }
  //     },
  //     '/down': {
  //       target,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/down': ''
  //       }
  //     }
  //   }
  }
});