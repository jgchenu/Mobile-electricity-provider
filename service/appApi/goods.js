const Koa = require('koa')
const app = new Koa();
const Router = require('koa-router')
let router = new Router()
const mongoose = require('mongoose')
const fs = require('fs')
router.get('/insertAllGoodsInfo', async (ctx) => {
  fs.readFile('./newGoods.json', 'utf-8', function (err, data) {
    data = JSON.parse(data)
    let saveCount = 0;
    const Goods = mongoose.model('Goods')
    data.map((value, index) => {
      console.log(value)
      let newGoods = new Goods(value)
      newGoods.save().then(() => {
        saveCount++;
        console.log('成功插入' + saveCount)

      }).catch((err) => {
        console.log(err)
      })
    })
  })
  ctx.body = '开始导入数据'
})
module.exports = router;
