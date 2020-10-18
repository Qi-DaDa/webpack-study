/*
 * @LastEditors: 七大大
 * @Date: 2020-10-14
 * @LastEditTime: 2020-10-18
 * @FilePath: \myantdd:\products\webpack_demo\webpack.common.js
 * @Description: webpack配置开发和生产公共的
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { loader } = require('./webpack.dev');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = 'production'

module.exports = {
  // 入口文件
  entry: {
    app: './src/index.js'
  },

  // 出口文件
  output: {
    filename: 'js/bundle.js',// 问件名
    // _dirname nodejs的变量，代表当前文件的目录绝对路径
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  // 模块
  module: {
    rules: [
      // 样式
      {
        test: /\.css$/,   //  test:识别的文件
        use: [
          // 使用 MiniCssExtractPlugin.loader 代替style-loader 来达到样式文件独立 
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 配置兼容不容的浏览器及版本
          {
            loader: 'postcss-loader',
            options: {
              // ident: 'postcss',
              // plugins: () => [
              //   require('postcss-preset-env')()
              // ]
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',// 这个loader是依赖file-loader;
        options: {
          limit: 4 * 1024,// 当图片尺寸小于10kb将一base64编译
          name: '[hash:10].[ext]',// 当图片是以路径显示对图片名进行重新编译
          outputPath: 'images'// 指定输出路径 
        }
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'font'// 指定输出路径
        }
      }
    ]
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
      // template: './index.html'
    }),
    // 模块热热更新
    new webpack.HotModuleReplacementPlugin(),
    // 样式文件独立
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash:10].css', // 样式文件重命名
    })
  ],
};
