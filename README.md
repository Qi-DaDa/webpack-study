<!--
 * @LastEditors: 七大大
 * @Date: 2020-10-13
 * @LastEditTime: 2020-10-18
 * @FilePath: \myantdd:\products\webpack_demo\README.md
 * @Description: webpack学习笔记
-->
# 七大大-webpack学习笔记

## 目录结构
  ```
  |- node_modules  // 依赖项包
  |- dist  // 打包后文件夹
    |- bundle.js  // 打包后文件
  |- src  // 所要打包的文件夹
    |- index.js  // 所要打包的文件
  |- .gitignore  // git上传配置
  |- index.html  // 调取打包的文件
  |-  package-lock.json  // 依赖项lock
  |- package.json  //依赖项
  ```
## 运行
  ``` 
  <!-- 打包 -->
  npm run build 或 npx webpack
  <!-- 开始本地服务 -->
  npm start
  <!-- 观察者模式，运行会监听改变 自动编译-->
  npm run watch 
  ```
## 依赖项
  ```  
  <!-- 基础依赖 -->
  npm init -y
  npm install webpack webpack-cli --save-dev  
  npm install --save lodash
  
  <!-- 资源管理 -->
  npm install --save-dev style-loader css-loader
  npm install --save-dev file-loader url-loader
  npm install --save-dev less less-loader

  <!-- 管理输出 -->
  npm install --save-dev html-webpack-plugin
  npm install clean-webpack-plugin --save-dev

  <!-- 开发 -->
  npm install --save-dev webpack-dev-server
  npm install uglifyjs-webpack-plugin --save-dev
  
  <!-- 不同环境搭建 -->
  npm install --save-dev webpack-merge

  <!-- 使样式文件独立 -->
  npm install --save-dev mini-css-extract-plugin

  <!-- 样式进行兼容处理 （第二个使兼容性更加精确） -->
  npm i --save-dev postcss-loader
  npm i --save-dev postcss-preset-env

  ```
## 踩坑记录
 *  配置clean-webpack-plugin根据官方文档有问题，要改为:
  ``` 
  const { CleanWebpackPlugin } = require("clean-webpack-plugin"); 
  new CleanWebpackPlugin(),
  ```
 * 配置观察者模式时,编辑后index.html丢失,在CleanWebpackPlugin中配置:
  ``` 
  <!-- 防止没改变的文件被删除 -->
  new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
  ```
 * 配置webpack-dev-server时在 ,根据文档"scripts": { "start": "webpack-dev-server --open"},会产生Cannot find module 'webpack-cli/bin/config-yargs'报错，根据issuse解答：
  ```
  "scripts": {
    "start": "webpack serve --mode development --env development",
  },
  ```
  * 根据官方文档配置模块热更新 new webpack.NamedModulesPlugin()  运行报错 ，删除即可完成模块热更新
  * 'extract-text-webpack-plugin' 使样式文件独立  这个包被弃用了  更换 `npm install --save-dev mini-css-extract-plugin`
 * 在使用 `mini-css-extract-plugin`时候会出现 `Automatic publicPath is not supported in this browser`报错，在出口文件及配置`publicPath: '/'` 可以解决
 * 在package.json中的 是由`postcss-preset-env`配置的 用于兼容不同浏览器及版本
 ``` "browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }
 ```
