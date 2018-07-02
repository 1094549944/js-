(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  /*
   * @Author: jiaxinying 
   * @Date: 2018-07-02 14:13:10 
   * @Last Modified by: jiaxinying
   * @Last Modified time: 2018-07-02 15:26:00
   */

  var util1 = {
    a: 100
  };

  /*
   * @Author: jiaxinying 
   * @Date: 2018-07-02 14:13:56 
   * @Last Modified by: jiaxinying
   * @Last Modified time: 2018-07-02 15:26:06
   */
  function fn1() {
    console.log('fn1');
  }
  function fn2() {
    console.log('fn2');
  }

  /*
   * @Author: jiaxinying 
   * @Date: 2018-07-02 14:14:00 
   * @Last Modified by: jiaxinying
   * @Last Modified time: 2018-07-02 15:25:41
   */
  console.log(util1);
  fn1();
  fn2();

})));
