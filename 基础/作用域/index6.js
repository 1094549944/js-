var array = [
  {
    "content": [
      {
        "入院诊断": "异常子宫出血"
      },
      {
        "入院日期": "2018-07-30"
      },
      {
        "主治医师": "安徽"
      }
    ],
    "title": "住院信息"
  },
  {
    "content": [
      {
        "已缴费用": "13000.00元"
      },
      {
        "累计费用": "19181.18元"
      },
      {
        "剩余押金": "-6181.18元"
      },
      {
        "可用余额": "-6181.18元"
      }
    ],
    "title": "缴费信息"
  }
]



var jojo = function (data, arrGet) {

  //技巧：用constructor 去判断数据类型比typeof 和instanceof 更好使
  if (data.constructor == Object) {
    for (var i in data) {
      if (data[i].constructor == String || data[i].constructor == Number) {
        var obj = {
          key: i,
          value: data[i]
        }
        return arrGet.push(obj)
      } else {
        //递归调用
        jojo(data[i], arrGet);
      }
    }
  } else if (data.constructor == Array) {
    for (var i = 0, max = data.length; i < max; i++) {
      if (data[i].constructor == String || data[i].constructor == Number) {
        console.log('数组值的输出:' + JSON.stringify(data[i]) + '--' + i);
      } else {
        //递归调用
        jojo(data[i], arrGet);
      }
    }
  }
}

// jojo(array[0].content, hospitalData)
// jojo(array[1].content, moneyData)
var arr = {}
for (var j = 0; j < array.length; j++) {
  arr['item' + j] = []
  arr['item' + j].title = array[j].title
  jojo(array[j].content, arr['item' + j])
}
//console.log(arr)

// for (var item in arr.item0) {
//   if (arr.item0[item].key)
//     console.log(arr.item0[item].key, arr.item0[item].value)
// }

for (var item in arr) {
  // console.log(arr[item])
  for (var j = 0; j < arr[item].length; j++) {
    console.log(arr[item][j].key, arr[item][j].value)
  }
}
