/*
pc端事件*
click,mouseover,mouseout,mouseenter,mouseleave,mousemove,mousedown,mouseup,mousewheel,keydown,keyup,load,scroll,blur,focus,change...

移动端事件：
 click,load,scroll,blur,focus,change

 touch事件模型（处理单手指操作）
 touchmove,touchend,touchstart，touchcancle

 gesture事件模型（处理多手指操作）
 项目中很少用
 gesturestart,gesturechange,gesturend




*/


//关于click

/*
1.click:在移动端click属于单击事件，不是点击事件。在移动端的项目中，我们经常会区分单击做什么，双击什么
所以移动端的浏览器在识别click的时候，只有确定是单击后才会把它执行。
在移动端使用click会存在300ms的延迟。浏览器在第一次点击结束后，还需要等待300ms看是否触发了第二次点击。
如果触发了第二次点击，就不属于clicK,如果没有触发第二次点击才属于click.
2.





*/

function on (curEle, type, fn) {
  curcurEle.addEventListener(type, fn, false)
}
on(oBox, 'touchstart', function (ev) {

})