const Koa = require('koa');
const app = new Koa;
const {
  connect,
  initSchemas
} = require('./database/init.js')
const mongoose = require('mongoose')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors=require('koa2-cors')
let user = require('./appApi/user')
let home = require('./appApi/home')

app.use(bodyParser())
app.use(cors())
//装载所有子路由
let router = new Router;
router.use('/user', user.routes())
router.use('/home', home.routes())
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

;
(async () => {
  await connect()
  initSchemas()
})()
app.use(async (ctx) => {
  ctx.body = `<h1>Hello world</h1>`
})
app.listen(3000, () => {
  console.log('listen 3000')
})
