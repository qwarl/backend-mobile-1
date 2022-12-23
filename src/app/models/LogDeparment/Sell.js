const mongoose = require('mongoose');

const { Schema } = mongoose;

const Sell = new Schema(
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
    approximatelyToVnd: { // if there US or EUR
      // actualPayment * exchangeRate
      type: Number,
    },
    note: {
      type: String,
    },
    invoiceNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('Sell', Sell, 'Sell');
