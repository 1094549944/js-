/*
 * @Author: jiaxinying 
 * @Date: 2018-08-07 18:33:28 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-09 11:31:04
 */

/*
数据类型
1.简单的数据类型：number, string, boolean, null, undefined
2.复杂类型： object

判断数据类型：
typeof 
number,string,string,undefined,function object

*/
{
  var n = 9;
  function fn () {
    console.log(n)
    s = 'str'
    n = 7
    var n = 6
    console.log(s)
  }
  fn()
  console.log(n)
  console.log(s)
}


{
  'use strict'
  f = function () { return true; };
  g = function () { return false; };
  ; (function () {
    console.log('false==false', false == false)
    console.log('g() && []', g() && [], '![]', ![])
    console.log('g() && [] == ![]', g() && [] == ![])
    if (g() && [] == ![]) {
      f = function f () { return false; };
      function g () { return true; }
      console.log('f', f())
    }
  })();
  console.log(f());
  console.log(g());
}
{
  function fn () {
    var n = 12;
    return function () {
      n++
      console.log(n)
    }
  }
  var f = fn()
  f()
  console.log('f', f)
  console.log('fn', fn)
  console.log('f()', f())
  console.log('fn()', fn())
}


{
  var color = 'green'
  var test4399 = {
    color: 'blue',
    getColor: function () {
      var color = 'red'
      alert(this.color)
    }
  }
  var getColor = test4399.getColor
  getColor()
  test4399.getColor()
}