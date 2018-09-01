/*
 * @Author: jiaxinying 
 * @Date: 2018-09-01 23:27:24 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-09-02 00:35:19
 * 跨域问题
 * 
 * jsonp 
 */

 /**
  * 跨域产生的原因
  * 
  * 1.浏览器的同源策略
  * 同源策略
  *    协议 端口号 域名  有一个不一致就会发生跨域 
  * 2.使用了XMLHttpRequest请求（如果不是使用了XHR，浏览器是不会报跨域的，比如使用图片）
  * 
  * 
  * 
  * 解决思路
  * 针对XHR
  * 比如使用jsonp
  * 
  * 解决跨域（同源策略）
  */

  /**
   *jsonp如何解决跨域
   * 
   * jsonp 主要是利用script标签，可以跨域请求资源的特性，来解决跨域问题
   * 通过jsonp 发送的get请求类型都是js，不是XHR
   * 
   * 
   * 注意：
   * 使用JSONP 后台代码也是需要改动的
   * 
   * 后台改动根据不同的语言，框架有所不同。
   * 
   * 使用JSONP得到的数据格式并不是JSON而是js脚本（application/javascript）,
   * 需要客户端自己改动自己所需要的格式
   * 
   * 
   * JSONP的弊端
   * 1.服务器需要改动，代码支持
   * 2.只支持GET
   * 3.发送的不是XHR请求
   */



/**
 * 
 * CORS使用
 * 主要作用是避开浏览器的同源策略的显示。
 * 修改在服务器端
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: POST, GET, OPTIONS
 * Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
 * Access-Control-Max-Age: 86400
 * 
 * 如果需要带cookie信息，则在 服务器端 还需要配置如下：
 * "Access-Control-Allow-Credentials": true 
 *  // Ajax设置
 * "withCredentials": true

 * 
 */

/**
 * 总结解决跨域的问题方法
 * 1.利用img，script的不受跨域问题的限制
 * 2.使用jsonp
 * 3.使用cors（推荐）
 * 4.使用postMessage(如果是需要兼容的话，不推荐，h5的新特性)
 * 5.websocket(h5新特性，全双工通信方式)
 * 6.代理，使用nginx 或者appache
 * 
 * 
 * 
 */


/*
配置nginx 
涉及到运维方面
*/




 /**
  * 
  * 推荐阅读地址：
  * https://blog.csdn.net/ligang2585116/article/details/73072868
  * 
  */



