//方法1
function fn (start, time) {
  if (start <= time) {
    setTimeout(() => {
      console.log(start)
      start++;
      return fn(start, time)
    }, 1000);
  } else {
    console.log('模拟结束')
  }
}
fn(0, 10)

//方法2
setTimeout(function fn (start, time) {
  if (start <= time) {
    console.log(start)
    start++
    setTimeout(fn, 1000, start, time)
  } else {
    console.log("END")
  }
}, 1000, 0, 10)

//方法3？
function fun (callback, time) {
  setTimeout(() => {
    callback()
    fun(callback, time)

  }, time);
}

fun(() => {
  console.log(1)
}, 1000)
