const mongoose = require('mongoose')

const { Schema } = mongoose

const BuyItemLog = new Schema(
  {
    typeOfFee: {
      type: String,
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
    total: {
      // unitPrice * quantity
      // type: Number,
      type: Number,
    },
    VAT: {
      // type: Number,
      type: Number,
    },
    actualPayment: {
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
