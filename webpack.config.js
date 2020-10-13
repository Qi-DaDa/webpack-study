/*
 * @LastEditors: 七大大
 * @Date: 2020-10-13
 * @LastEditTime: 2020-10-13
 * @FilePath: \myantdd:\products\webpack_demo\webpack.config.js
 * @Description: webpack配置文件
 */

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};