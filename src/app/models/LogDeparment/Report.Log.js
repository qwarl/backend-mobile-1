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
      type: Number,
      // default: 0,
    },
    totalSellVAT: {
      type: Number,
      // default: 0,
    },
    totalSellVND: {
      type: Number,
      // default: 0,
    },
    buyReport: [
      {
        type: Schema.Types.ObjectId,
        ref: 'BuyItemLog',
      },
    ],
    totalBuy: {
      type: Number,
    },
    totalBuyVAT: {
      type: Number,
    },
    paidOnBehalfOfReport: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PaidOn',
      },
    ],
    totalPaidOnBehalfOf: {
      type: Number,
    },
    exchangeRate: {
      type: Number,
    },
    profitVND:{
      type: Number,
    },
    profitUSD:{
      type: Number,
    },
    profitVAT:{
      type: Number,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('ReportLog', ReportLog, 'ReportLog')
