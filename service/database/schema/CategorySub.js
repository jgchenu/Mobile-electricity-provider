const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySubChema = new Schema({
  ID: {
    unique: true,
    type: String
  },
  MALL_CATEGORY_ID: {
    type: String
  },
  MALL_SUB_NAME: {
    type: String
  },
  COMMENTS: {
    type: String
  },
  SORT: {
    type: Number
  }
}, {
  collection: 'CategorySub'
})
mongoose.model('CategorySub', categorySubChema)
