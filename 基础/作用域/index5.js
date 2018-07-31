/*
 * @Author: jiaxinying 
 * @Date: 2018-07-31 18:57:42 
 * @Last Modified by:   jiaxinying 
 * @Last Modified time: 2018-07-31 18:57:42 f
 * 作用域练习
 */
function fn () {
  var i = 10;
  return function (n) {
    console.log(n + (++i))
  }
}
var f = fn()


f(10)
f(20)
fn()(10)
fn()(20)

/*
先给形参赋值

*/



function fn1 (i) {
  return function (n) {
    console.log(n + i++)
  }
}

var f1 = fn1(13);
f1(12)
f1(14)
fn1(15)(12)
fn1(16)(13)