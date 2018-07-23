/*
 * @Author: jiaxinying 
 * @Date: 2018-07-23 16:46:26 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-23 18:01:30
 * 作用域链 闭包 ，私有参数，公有参数
 */

console.log('私有，公有')
console.log(total)

var total = 0
function fn (num1, num2) {
  console.log(total)
  var total = num1 + num2
  console.log(total)
}

fn(100, 200)
console.log(total)

//1. 如何区分私有变量，全局变量
/*
1）.在全局作用域下声明（预解释的时候）的变量是全局变量
2）.在  私有作用域中声明的变量  和  函数的形参  都是私有变量
在私有作用域中，发现，代码执行的时候，遇到一个变量，首先，需要确定是否为私有变量；
如果是私有变量，那么和外边的任何变量都没有关系;如果不是私有的，则往当前作用域的上级作用域查找;
如果上级作用域也没有，则继续向上查找，一直找到window为止（作用域链）。
*/

//2.当函数执行的时候（直接目的：让函数体中的代码执行），首先会形成一个新的私有的作用域,然后按照如下步骤执行

/*
1）.如果有形参，先给形参赋值
2）.进行私有作用域中的预解释
3）.私有作用域中的代码从上到下执行
*/


//闭包  闭包只是一种机制

//函数形成一个新的私有的作用域保护了里面的私有变量不受外界的干扰（外边修改不了私有的，私有的也修改不了外面的）-->闭包

console.log('------------------------')
console.log('修改公共变量')
console.log(total1)//undefined
var total1 = 0;
function fn (num1, num2) {
  console.log(total1)//0
  total1 = num1 + num2
  console.log(total1)//300
}
fn(100, 200)
console.log(total1)//300






