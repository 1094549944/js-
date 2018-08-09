/*
 * @Author: jiaxinying 
 * @Date: 2018-07-24 14:21:00 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-09 19:47:08
 * 预解析
 */

//1.预解释是毫无节操的一种机制

if (!(num) in window) {
  var num = 12
}
console.log(num)
//undefined


/*
1.预解释的时候，不管条件是否成立，都要把带var 的进行声明
2.预解释的时候，只预解释“=”左边的，右边的是值，不参与预解释
*/


// window 的预解释： var num; ->window.num;


{

  function fn () {
    console.log('ok')
  }
  fn()

}

//2.匿名函数：之函数表达式
//把函数定义的部分当做一个值赋值给我们的变量/元素的某一个事件


/*

预解释的时候，只预解释“=”左边的，右边的是值，不参与预解释


*/
{
  fn()//fn is not a function
  //推荐使用这种方式来写定义函数
  var fn = function () {
    console.log('ok')
  }
  fn()//ok
}


//3.自执行函数：定义和执行一起完成了；
//执行函数定义的那个function 在全局作用域下不进行预解释。当，代码执行到这个位置的时候定义和执行一起完成了

(function (num) { })(100)
//或
~function (num) { }(100)
  + function (num) { }(100)
!function (num) { }(100)
  - function (num) { }(100)



//4 函数体中return 下面的代码虽然不再执行了，但是需要预解释；return后面跟着的都是我们返回的值，所以不进行预解释
function fn () {
  console.log(num)
  return function () { }
  var num = 10
}
fn()



//5 在预解释的时候，名字已经声明过了，不需要重新的声明。但是需要重新的赋值。


/*
预解释： var fn；window.fn;
在js中，如果变量的名字和函数的名字重复了，也算冲突

*/

var fn = 13;
function fn () {
  console.log('ok')
}
console.log(fn)//13




fn()//2
function fn () {
  console.log(1)
}
fn()//2
var fn = 10
fn()//fu is not a function
function fn () {
  console.log(2)
}
fn()

/*

window 预解释


1.声明+定义fn=xxxxxx1
2.声明var fn；(不需要重新声明)
3.声明+定义 fn=xxxxxx2(不需要重新声明了，但是重新定义了)

->fn==xxxxxx2
*/

fn()
function fn () {
  console.log('我是1')
}
fn()
var fn = '我是输出'
fn()
function fn () {
  console.log(2)
}
fn()


function foo () {
  var a = 20
  console.log(a)
  function bar () {
    a = 30;
    console.log(a)
  }
  bar()
  console.log(a)
}
foo()


function fo () {
  var i = 0;
  return function (n) {
    return n + i++;
  }
};

var f = fo();
var a = f(15); //value:____15______________
var b = fo()(15); //value:____________15______
var c = fo()(20); //value:____20______________
var d = f(20); //value:_______21__________