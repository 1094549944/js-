/*
 * @Author: jiaxinying 
 * @Date: 2018-07-23 18:05:58 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-30 18:55:08
 * 全局变量的细节问题
 */


// console.log(num)//undefined
// var num = 12;

// console.log(num2)//num2 is not defined ;变量没有被定义，不带var 不能被预解释
// num2 = 13



//在全局作用域中，带var 和不带var 的区别很关系

/*

区别：
带var 的可以进行预解释。所以在赋值的前面执行不会报错。
不带var 的是不能进行预解释的，在前面执行会报错



关系：
num=12 ->相当于给window增加了一个叫做num2的属性名，属性值：12
var num =12 ->相当于给全局作用域增加了一个全局变量num，但不仅如此，他也相当于给window增加了要给属性名num2,属性值是12
*/


// var total = 0;
// function fn () {
//   console.log(total)
//   total = 10
// }
// fn()
// console.log(total)



/*

私有作用域中出现的一个变量不是私有的，则往上级作用域进行查找，上级没有，则继续向上查找。
一直找到window为止。
如果window 也没有呢？

1.我们是获取值：console.log(total)  ->报错了
2.我们是设置值：total=100 ->相当于给window增加了一个属性名total，属性值是100




*/

//js 中如果在不进行任何特殊处理的情况下，上面的代码报错，下面的代码都不再执行了。





