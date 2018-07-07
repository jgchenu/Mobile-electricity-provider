const mongoose =require('mongoose')
const db='mongodb://localhost/smile-db'
exports.connect=()=>{
    //链接数据库
    mongoose.connect(db)
}