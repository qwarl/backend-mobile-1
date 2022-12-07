const mongoose = require('mongoose')

const { Schema } = mongoose

const PaidOn = new Schema(
  {
    typeOfFee: {
      type: String,
    },
    price: {
      type: Number,
    },
    invoiceNumber: {
      type: String,
    },
    payer: {
      type: String,
    },
    paymentFor: {
      type: String,
    },
    paidBy: {
      type: String,
    },
    
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('PaidOn', PaidOn, 'PaidOn')
