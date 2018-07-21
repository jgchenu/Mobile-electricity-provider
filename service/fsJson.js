const fs = require('fs')
fs.readFile('./goods.json', 'utf-8', function (err, data) {
  let newData = JSON.parse(data)
  let pushData = [];
  let i = 0;
  newData.RECORDS.map(function (value, index) {
    if (value.IMAGE1) {
      pushData.push(value)
      console.log(value.NAME)
      i++;
    }
  })
  console.log(i)
  fs.writeFile('./newGoods.json', JSON.stringify(pushData), function (err) {
    if (err) {
      console.log('写文件操作失败')
    } else {
      console.log('写文件操作成功')
    }
  })
})
