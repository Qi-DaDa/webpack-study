/*
 * @LastEditors: 七大大
 * @Date: 2020-10-14
 * @LastEditTime: 2020-10-14
 * @FilePath: \myantdd:\products\webpack_demo\webpack.prod.js
 * @Description: webpack配置生产环境
 */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    // ! 无法使用当生产运行会报错
    //   new UglifyJSPlugin({ sourceMap: true })
    // ! 可以判断当处的环境，但不知如何去判断
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ]



});