const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FinalSettlement = new Schema(
  {
    totalOPS: {
      type: String,
    },
    totalPaid: {
      type: String,
    },
    totalSettlement: {
      type: String,
      // required: true
    },
    actionsSettlement: {
      type: String,
    },
    statusSettlement: {
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
  },
  { timestamps: true, versionKey: false },
) //bỏ __v trong document in mongoose

module.exports = mongoose.model(
  'FinalSettlement',
  FinalSettlement,
  'FinalSettlement',
)
