/*
 * @Author: jiaxinying 
 * @Date: 2018-08-13 10:39:53 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-08-13 15:05:06
 * 单例模式
 * 
 * 工厂模式
 * 
 * 类 
 * 
 * 构造函数模式
 * 
 * 原型链模式
 *
 */
//
var obj = {
  name: '',
  check: function () { },
  submitFun: function () { }
}
obj.check()

//高程写法，压力放在第一次加载的时候。
var obj2 = (function () {
  var name = ''
  function check () {

  }
  function submitFun () { }
  return {
    check: check,
    submitFun: submitFun
  }
})()
obj2.check()

//工厂模式(批量创建)
function createJsPerson (name, age) {
  var obj = {}
  obj.name = name
  obj.age = age
  obj.writeCss = function () {
    console.log('我叫' + obj.name + '今年' + obj.age + '我会写css')
  }
  obj.writeJs = function () {
    console.log('我叫' + obj.name + '今年' + obj.age + '我会写js')
  }
  return obj
}
var p1 = createJsPerson('张三', 28)

// p1.writeCss()
// p1.writeJs()

//构造函数(实例识别)

function CreateJsPerson (name, age) {
  this.name = name
  this.age = age
  this.writeCss = function () {
    console.log('我叫' + this.name + '今年' + this.age + '我会写css')
  }
  this.writeJs = function () {
    console.log('我叫' + this.name + '今年' + this.age + '我会写js')
  }
}

var p2 = new CreateJsPerson('李四', 15)

p2.writeCss()
p2.writeJs()

/*
构造函数和工厂的区别
创建：
1.不需要手动创建obj对象了，而且也不用return obj对象了。
2.原来的obj统一替换成this

执行
定义变量= new 函数名（参数值）

我们把执行函数的时候，用new创建的方式称之为构造函数模式（示例创建的方式）

通过这种方式，我们把原先的那个函数称之为类。把返回结果p1 称之为这个类的一个实例。



对象，类，实例的区别？

对象：js中万物皆对象，泛指 自然界中万物皆对象

类：对象的细分 

实例：类中一个真真切切的东西。


返回的一个实例也是一个对象数据类型

也就是说，new一个函数的时候，首先会默认的创建一个对象，就是我们创建的那个实例

接下来会以this作为上下文，把对应的属性存起来（this，指默认穿简单的对象）

默认的把我们创建的对象给我们的实例，也就是说，我们创建的实例，就是我们要的对象。换句话说，this就是我们创建的这个实例。

*/


/*

当new一个函数的时候，这个函数就是一个类。new的时候，浏览器的操作：
1) 首先会主动创建一个对象类型的数据，这个数据是当前函数的实例，或者说，以这个函数名为识别符的实例。可以用instanceof来检验一下：
alert(person2 instanceof FE360);	
2) 以这个实例为上下文（context，this，当前行为发生的那个主体），再把构造函数当成一个方法来运行，这个方法就是起一个初始化实例的作用
3) 可以通过实例来使用构造函数的属性和方法了


instanceof:用来检测某一个实例是不是属于属于某个类的，属于返回true,否则返回false


js 内置类
Object,Array,String,Number,Math,Date,RegEXp


构造函数模式的不足：
很多通用的方法没有实现共享。



*/


/*
原型链模式：产品差异化的同时，有相同的部分还可以共享
将需要共享的属性写在原型链prototype上，这样，prototype上所定义的属性和方法就可以被每一个类的实例共享了
*/

function CreateJsPersonOne (name) {
  this.name = name

}
CreateJsPersonOne.prototype.writeCss = function () {
  console.log(this.name + '教css')
}
CreateJsPersonOne.prototype.writeJs = function () {
  console.log(this.name + '教JS')
}
var p3 = new CreateJsPersonOne()


/*
每一个function函数都有一个天生自带的属性，叫做prototype，但是如果不是new 函数的话，这个属性没有任何意义

prototype属性存储的是一个对象数据类型，有一个自己的内存块。并且这个内存块上，又有2个自带的属性，constructor，__proto__

constructor 是prototype这个对象数据类型特有的。而__proto__是所有对象数据类型都有的。

当我们new一个新对象的时候，函数变成了类，并且返回了一个实例，这个实例是对象数据类型的。所有__proto__这个自带的属性，并且这个属性指向的是我们的函数里面的prototype自己的那个内存地址。

所以，我们的实例，p3除了拥有函数里面自带的name属性（私有属性），同时还拥有了函数prototype上定义的属性（共有属性）





*/