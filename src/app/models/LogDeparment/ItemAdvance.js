const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemAdvance = new Schema(
  {
    money: {
      type: String,
    },
    username: {
      type: String,
    },
    reason: {
      type: String,
      // required: true
    },
    date: {
      type: String,
    },
    status: {
      type: String,
    },
    userCreate: {
      type: String,
      // required: true
    },
    userUpdate: {
      type: String,
    },
    creacteAt: {
      type: String,
    },
    updateAt: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false },
) //bỏ __v trong document in mongoose

module.exports = mongoose.model('ItemAdvance', ItemAdvance, 'ItemAdvance')
