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
router.get('/insertAllcategory', async (ctx) => {
  fs.readFile('./dataJson/category.json', 'utf-8', function (err, data) {
    data = JSON.parse(data)
    let saveCount = 0;
    const Category = mongoose.model('Category')
    data.RECORDS.map((value, index) => {
      console.log(value)
      let newCategory = new Category(value)
      newCategory.save().then(() => {
        saveCount++;
        console.log('插入成功' + saveCount)
      }).catch((err) => {
        console.log('插入失败', err)
      })
    })
  })
  ctx.body = '开始导入数据'

})
router.get('/insertAllcategorySub', async (ctx) => {
  fs.readFile('./dataJson/category_sub.json', 'utf-8', function (err, data) {
    data = JSON.parse(data)
    let saveCount = 0;
    const CategorySub = mongoose.model('CategorySub')
    data.RECORDS.map((value, index) => {
      console.log(value)
      let newCategorySub = new CategorySub(value)
      newCategorySub.save().then(() => {
        saveCount++
        console.log('插入成功' + saveCount)
      }).catch((err) => {
        console.log('插入失败', err)
      })
    })
  })
  ctx.body = '开始导入数据'

})
// 获取商品详情信息接口
router.post('/getDetailGoodsInfo', async (ctx) => {
  try {
    let goodId = ctx.request.body.goodId
    const Goods = mongoose.model('Goods')
    let result = await Goods.findOne({
      ID: goodId
    }).exec()
    ctx.body = {
      code: 200,
      message: result
    }
  } catch (err) {
    ctx.body = {
      code: 500,
      message: err
    }
  }
})
//读取大类数据的接口
router.get('/getCategoryList', async (ctx) => {
  try {
    const Category = mongoose.model('Category')
    let result = await Category.find().exec()
    ctx.body = {
      code: 200,
      message: result
    }
  } catch (err) {
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

// 读取小类的数据
router.post('/getCategorySubList', async (ctx) => {
  try {
    let categoryId = ctx.request.body.categoryId;
    const CategorySub = mongoose.model('CategorySub')
    let result = await CategorySub.find({
      MALL_CATEGORY_ID: categoryId
    })
    ctx.body = {
      code: 200,
      message: result
    }

  } catch (err) {
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

// 根据类别获取商品列表
router.get('/getGoodsListByCategorySubId', async (ctx) => {
  try {
    let categorySubId = ctx.request.body.categorySubId;
    categorySubId = '2c9f6c946016ea9b016016f79c8e0000';
    const Goods = mongoose.model('Goods')
    let result = await Goods.find({
      SUB_ID: categorySubId
    })
    ctx.body = {
      code: 200,
      message: result
    }

  } catch (err) {
    ctx.body = {
      code: 500,
      message: err
    }
  }
})

module.exports = router;
