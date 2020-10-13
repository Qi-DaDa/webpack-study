import _ from 'lodash';
import './index.css'
import Img from './images/logo.png';
import printMe from './print.js';

function component () {
  var element = document.createElement('h1');
  var btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello你好', 'webpack'], ' ');
  element.classList.add('hello')
  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Img;
  element.appendChild(myIcon);


  btn.innerHTML = '点击打印!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());