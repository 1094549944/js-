/*
 * @Author: jiaxinying 
 * @Date: 2018-07-30 18:39:22 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-30 18:47:19
 * 高级程序设计例题
 * 
 */

{
  function setName (obj) {
    obj.name = 'zhangsan'
    obj = new Object()
    obj.name = 'lisi'
  }
  var person = new Object()
  setName(person)
  console.log(person.name)//zhangsan

  /** 
   * 说明，即使在函数内部修改了参数的值，但是原始的引用仍然保持不变，
   * 实际上，挡在函数内部重写obj时，这个变量引用的就是一个局部对象了，
   * 而这个局部对象在函数执行完毕后立即被销毁。
   * 
   */
}
