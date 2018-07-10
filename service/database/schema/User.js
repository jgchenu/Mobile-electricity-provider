const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId;
//创建userschema
const userSchema = new Schema({
  UserId: {
    type: ObjectId
  },
  userName: {
    unique: true,
    type: String
  },
  password: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  lastLoginAt: {
    type: String,
    default: Date.now()
  }
}, {
  collection: 'user'
}) //加盐

//发布模型
mongoose.model(
  'User', userSchema
)
