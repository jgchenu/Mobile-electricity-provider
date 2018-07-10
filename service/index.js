const Koa=require('koa');
const app=new Koa;
const {
  connect,
  initSchemas
} = require('./database/init.js')
const mongoose=require('mongoose')
;(async()=>{
    await connect()
    initSchemas()
    const User=mongoose.model('User')
    let oneUser=new User({userName:'jspang01',password:'123456'})
    oneUser.save().then(()=>{
        console.log("插入成功")
    })
    let user=await User.findOne({}).exec()
    console.log('-------------------')
    console.log(user)
    console.log('---------------------------')
})()
app.use(async(ctx)=>{
    ctx.body=`<h1>Hello world</h1>`
})
app.listen(3000,()=>{
    console.log('listen 3000')
})