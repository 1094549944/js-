/*
 * @Author: jiaxinying 
 * @Date: 2018-07-25 14:31:54 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-26 11:51:23
 * 
 * 如何向上查找上级作用域  关于内存释放和作用域销毁的研究  内存释放（垃圾回收）
 */
//如何查找当前作用域的上一级作用域：
/*
 看当前函数是在哪个作用域下定义的，那么它的上级作用域就是谁->和函数在哪执行的没有任何关系


*/
var num = 12;

function fn () {
  var num = 120;
  return function () {
    console.log(num)
  }
}

var f = fn()


f()//120

~function () {
  var num = 1200
  f()//120
}()


/*

window全局作用域，进行全局作用域下的预解释

var num; var f；
fn="内存地址xxxxfff0000"

内存地址xxxxfff0000=var num =120;  return function () { console.log(num)}

num =12
f=fn执行的返回结果




*/




//关于内存释放和作用域销毁的研究



//堆内存的释放

/*
堆内存：用来提供一个供JS代码执行的环境  ->作用域（全局作用域、私有作用域）


var obj ={name:'网三'，age"'20'}

堆内存释放问题（垃圾回收）
对象数据类型或者函数数据类型在定义的时候，首先会开辟一个堆内存。
堆内存有一个引用地址，如果外面有变量等知道了这个地址，我们就说，这个内存被占用了，就不能销毁了。
想让堆内存销毁、释放，只需要把所有引用它的变量值赋值为null即可。
如果当前的堆内存没有任何东西被占用了，那么浏览器会在空闲的时候把它销毁。


obj=null//释放内存，浏览器会在空闲的时候回收。

*/



//桟内存（作用域）：用来存储引用数据类型的值 ->对象存储的是属性名和属性值，函数存储的是代码字符串


//全局作用域
/*
1.只有当页面关闭的时候，全局作用域才会销毁。

*/

//私有作用域（只有函数执行会产生私有作用域）
/*
1.一般情况下，函数执行会形成一个新的私有的作用域，当私有作用域中的代码执行完成后，
我们当前作用域都会主动的进行释放和销毁
2.但是函数存在特殊的情况。

(1)当前私有作用域中的部分内存被作用域以外的东西占用了，那么当前的这个作用域就不能销毁了。

a.函数执行 返回了一个引用数据类型值，并且在函数的外面被一个其他的东西给 接收 了，这种情况下一班形成的私有作用域不会被销毁。

function fn(){
  var num =100;
  return function(){
    num++;
    console.log(num)
  }
}
或者
function fn(){
  var num =100;
  return function(){
    
  }
}

//fn 执行形成的这个私有的作用域就不能再销毁了。

var f=fn() 
function fn(){
  var num =100;
  return num
}
var f=fn() 
console.log(f)//100




b.在一个私有的作用于中给DOM元素时间绑定方法，一般情况下，我们的私有作用域都不销毁。


c.  
function fn(){
  var num =100;
  retrun function(){}
}

fn()()，

上述情况，属于不立即销毁，fn返回的函数没有被其他的东西占用，但是还需要执行一次呢，所以暂时不立即销毁。当返回的值执行完成以后。
浏览器会在空前的时候把它销毁。
*/

/* 
如何解决内存泄露问题
IE,火狐，谷歌



*/








var Num = 1;
var NumBox = {
  Num: 2,
  getNum_1: function () {
    console.log(this.Num)
  },
  getNum_2: function () {
    return function () {
      console.log(this.Num)
    }
  }
}


var fn1 = NumBox.getNum_1;
NumBox.getNum_2()();
NumBox.getNum_1()
fn1()