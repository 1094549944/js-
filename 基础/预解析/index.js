/*
 * @Author: jiaxinying 
 * @Date: 2018-07-23 11:10:37 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-23 16:09:39
 * 
 * 数据类型+预解释+内存分类
 */



//1. js中的数据类型
/*
number,string,null,undinfined,boolean,object
*/

/*
基本数据类型：number,string.null,boolean,undefined

引用数据类型：object,function

基本数据类型，是按照值来操作的，引用类型是按照引用地址操作的。

*/






/*

1）.当浏览器加载HTML页面的时候，首先会提供一个供全局JS代码执行的环境->全局作用域（global/window）
2）.简单数据类型存储：

var obj={
  name:'王二'，
  age:'12
}
obj.age=8
首先会开辟一个新的内存空间。然后把对应的属性名和属性值分别都存到空间中。然后把这个地址赋值给obj;

首先通过地址，找到内存空间。然后把空间中的age 属性名对应的属性值修改为8



3）.函数数据类型：

function fn（）{
  console.log('我是函数数据类型')
}
首先会开辟一个新的内存空间,然后把函数体中的代码当做字符串存到空间中，然后把地址赋值给函数名；
此时fn 代表的是当前函数本身（整体）
*/

function fn () {
  var a = 'name';
  var b = 'age'
  console.log('我是函数数据类型', a)
}

console.log(fn)
console.log(fn())

/*
返回结果：
我是函数数据类型 name
undefined


console.log(fn):把整个函数的定义部分（函数本身）在控制台输出
console.log(fn()):把当前函数执行的返回结果（return 后面写的什么，就返回值是什么，如果没有return,默认返回值是undefined）在控制台输出


*/



//2.预解释（变量提升）：在当前的作用域当中，js代码执行之前，浏览器首先会默认的把所有的带var 和function 的进行提前的声明或者定义

/*
1)理解声明和定义

var num =12;
声明：var num ; 告诉浏览器在全局作用域中有一个num的变量了,如果一个变量只是声明了，但是没有赋值，默认的值是undefined
定义：num =12 ; 给变量进行赋值


2)带var 和function 关键字在预解释的时候操作不一样

var->在预解释的时候只是提前的声明
function->在预解释的时候提前的声明+定义都完成了。




3)预解释只发生在当前的作用域下，例如：开始只对window 下的进行预解释，只有函数执行的时候，才会对函数中的进行预解释



*/





function total (num1, num2) {
  var total = num1 + num2
}
total(1, 2)



//内存分类

/*
JS中的内存内存

堆内存：用来提供一个供JS代码执行的环境  ->作用域（全局作用域、私有作用域）

桟内存：用来存储引用数据类型的值 ->对象存储的是属性名和属性值，函数存储的是代码字符串



*/

console.log(obj, 'obj')
var obj = {
  name: '王二',
  age: '12'
}
console.log(obj, 'obj')

/*
结果：
undefined 'obj'
{ name: '王二', age: '12' } 'obj'

*/
