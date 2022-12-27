const mongoose = require('mongoose')

const { Schema } = mongoose

const ReportLog = new Schema(
  {
    info: {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
    },
    sellReport: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Sell',
      },
    ],
    totalSell: {
      // type: Number,
      type: String,
      // default: 0,
    },
    totalSellVAT: {
      // type: Number,
      type: String,
      // default: 0,
    },
    totalSellVND: {
      // type: Number,
      type: String,
      // default: 0,
    },
    buyReport: [
      {
        type: Schema.Types.ObjectId,
        ref: 'BuyItemLog',
      },
    ],
    totalBuy: {
      // type: Number,
      type: String,
    },
    totalBuyVAT: {
      // type: Number,
      type: String,
    },
    paidOnBehalfOfReport: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PaidOn',
      },
    ],
    totalPaidOnBehalfOf: {
      // type: Number,
      type: String,
    },
    exchangeRate: {
      type: Number,
    },
    profitVND:{
      // type: Number,
      type: String,
    },
    profitUSD:{
      // type: Number,
      type: String,
    },
    profitVAT:{
      // type: Number,
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('ReportLog', ReportLog, 'ReportLog')
