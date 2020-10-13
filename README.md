<!--
 * @LastEditors: 七大大
 * @Date: 2020-10-13
 * @LastEditTime: 2020-10-13
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
  npm run build 或 npx webpack
  ```
## 依赖项
  ```  
  <!-- 基础依赖 -->
  npm init -y
  npm install webpack webpack-cli --save-dev  
  npm install --save lodash
  
  <!-- 资源管理 -->
  npm install --save-dev style-loader css-loader
  npm install --save-dev file-loader

  <!-- 管理输出 -->
  npm install --save-dev html-webpack-plugin
  npm install clean-webpack-plugin --save-dev
  
  ```

