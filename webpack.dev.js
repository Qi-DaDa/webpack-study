/*
 * @LastEditors: 七大大
 * @Date: 2020-10-14
 * @LastEditTime: 2020-10-18
 * @FilePath: \myantdd:\products\webpack_demo\webpack.dev.js
 * @Description: webpack配置开发环境
 */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // 设置打包后运行报错原码位置，不设置报错会只想打包文件,
  devtool: 'inline-source-map',
  // 本地服务
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 引导服务指向的文件夹
    compress: true,// 启动gzip压缩
    hot: true,// 模块热更新
    open: true,// 自动打开浏览器
    port: 7007 // 默认端口是8080
  },
});