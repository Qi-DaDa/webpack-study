/*
 * @LastEditors: 七大大
 * @Date: 2020-10-13
 * @LastEditTime: 2020-10-14
 * @FilePath: \myantdd:\products\webpack_demo\webpack.config.js
 * @Description: webpack配置文件
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 入口文件
  entry: {
    app: './src/index.js',
  },
  // 出口文件
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 插件
  plugins: [
    // 清理所有打包的文件
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,// 在配置观察者模式index.js会被清除,该属性会杜绝此问题
    }),
    // 输出管理-默认生成index.html
    new HtmlWebpackPlugin({
      title: 'webpack学习-七大大', // index.html的title
    }),
    // 模块热热更新
    new webpack.HotModuleReplacementPlugin()
  ],
  // 本地服务
  devServer: {
    contentBase: './dist', // 引导服务指向的文件夹
    hot: true,// 模块热更新
  },
  // 模块
  module: {
    rules: [
      // 样式
      {
        test: /\.css$/,   //  test:识别的文件
        use: [ // use:所有使用的loader
          'style-loader',
          'css-loader'
        ]
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  // --------------开发和生产不同的配置-----------------
  // 设置打包后运行报错原码位置，不设置报错会只想打包文件,影响打包速度和大小(开发环境配置,生产环境移除)
  devtool: 'inline-source-map',
};