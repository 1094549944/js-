var number = 2;
var obj = {
  number: 4,
  fn1: (function () {
    this.number *= 2;
    number = number * 2;
    var number = 3;
    return function () {
      this.number *= 2;
      number *= 3;
      console.log(number);
    }
  })(),
  db2: function () { this.number *= 2 }
};

var fn1 = obj.fn1;
console.log(number);//问这会会弹出什么结
fn1();//这会弹出什么结果
obj.fn1();//这次弹出什么 结果

console.log(window.number); //这会window.number的结果是什么
console.log(obj.number);   //这会obj.number的结果是什么     




/*

预解释：
number,obj,fn1

number=2;//全局的

obj={
  number:4,//obj下的number=4;
  fn1:function(){
    this.number *= 2;
    number = number * 2;
    var number = 3;
    console.log(number)
  }
}


在给obj下的fn1 赋值的时候执行闭包函数，形成私有作用域

预解释：
var number; 私有作用域下的number
window.number*=2;//全局的number=4
number=undefined*2//纯属
console.log(number)//NaN
number=3//私有下的number:3
//闭包有return 并且被obj.fn1占用了，也就是闭包不销毁。

fn1=obj.fn1
console.log(number)//4

fn1()
this.number*=2;window.number*=2=>window下的number=8

number*=3;找没有销毁的那个闭包中的私有作用域下的number=>私有作用域下的那个number变成了9
console.log(number)//9


obj.fn1()
this.number *= 2;obj.number*=2//obj下的number变成了8
9*3=27 私有作用域下的那个number变成了27

window.number=8;
obj.number=8

*/