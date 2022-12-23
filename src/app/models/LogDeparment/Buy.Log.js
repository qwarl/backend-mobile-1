const mongoose = require('mongoose')

const { Schema } = mongoose

const BuyItemLog = new Schema(
  {
    typeOfFee: {
      type: String,
    },
    COM_KH:{
      type:String,
    },
    price_COM_KH:{
      type:String,
    },
    quantity: {
      // type: Number,
      type: Number,
    },
    unitPrice: {
      // type: Number,
      type: Number,
    },
    currency: {
      type: String,
    },
    totalVND: {
      // unitPrice * quantity
      // type: Number,
      type: Number,
    },
    totalUSD: {
      // unitPrice * quantity
      // type: Number,
      type: Number,
    },
    totalEUR: {
      // unitPrice * quantity
      // type: Number,
      type: Number,
    },
    changeToVND:{
      type:Number,
    },
    changeToVNDVAT:{
      type:Number,
    },
    VAT: {
      // type: Number,
      type: Number,
    },
    exchangeRate:{
      type:Number,
    },
    actualPaymentVND: {
      // unitPrice(currency) * quantity * (1 + VAT)
      // type: Number,
      type: Number,
    },
    actualPaymentUSD: {
      // unitPrice(currency) * quantity * (1 + VAT)
      // type: Number,
      type: Number,
    },
    actualPaymentEUR: {
      // unitPrice(currency) * quantity * (1 + VAT)
      // type: Number,
      type: Number,
    },
    paymentFor: {
      type: String,
    },
    paidBy: {
      type: String,
    },
    invoiceNumber: {
      type: String,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('BuyItemLog', BuyItemLog, 'BuyItemLog')
