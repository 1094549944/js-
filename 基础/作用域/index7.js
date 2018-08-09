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

var hosArray = array[0]
var moneyArray = array[1]
var hosData = []
var moneyData = []

for (var i in hosArray.content) {
  //   //console.log(hosArray[i])
  for (var j in hosArray.content[i]) {
    var getObj = {}
    getObj.key = j;
    getObj.value = hosArray.content[i][j]
    hosData.push(getObj)
  }
}
hosArray.data = hosData


console.log(hosArray)
for (var i = 0; i < hosArray.data.length; i++) {
  console.log(hosArray.data[i].key)
  console.log(hosArray.data[i].value)
}






