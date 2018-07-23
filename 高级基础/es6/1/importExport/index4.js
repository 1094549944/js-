function buy () {
  console.log('开始买笔')
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('买了笔芯')
      resolve('数学作业')
    }, 1000);
  })
  return p
}

function work (data) {
  console.log('开始写作业', data)
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('写完作业')
      resolve('作业本')
    }, 1000);
  })
  return p
}
function out (data) {
  console.log('开始上交', data)
  var p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("上交完毕")
      resolve("得分：A")
    }, 1000);
  })
  return p
}


buy().then(work).then(out).then((data) => {
  console.log(data)
})