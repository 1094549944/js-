 ###es6模块化如何使用，开发环境如何打包
 * 模块化的基本语法
 * 开发环境配置
 * 关于js众多模块化标准

 ## import export 语法

 ## 开发环境 babel
node 环境，
npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest
创建.babelrc文件

npm install -g babel-cli

babel --version

创建文件index2.js
执行babel index2.js

输出结果
<!-- "use strict";
/*
 * @Author: jiaxinying * @Date: 2018-07-02 14:30:14
 * @Last Modified by: jiaxinying * @Last Modified time: 2018-07-02 14:33:25
 */

[1, 2, 3, 4].map(function (item) {
  return item + 1;
}); -->


## 处理模块化依赖使用webpack

npm install webpack babel-loader --save-dev

配置webpack.config.js

配置package.json中的scripts

运行npm start

## rollup
rollup.js
日常用的的vue和react，都是用rollup打包的。

npm i rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest --save-dev


## 配置.babelrc
## 配置rollup.config.js

rollup 功能单一，webpack 功能强大

rollup 只能模块化
书籍参考：参考设计原则和《linux/unix设计思想》
工具要尽量功能单一，可集成，可扩展
