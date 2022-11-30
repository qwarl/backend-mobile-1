const mongoose = require('mongoose');

const { Schema } = mongoose;

const Sell = new Schema(
  {
    info: {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
    },
    reportFileId: {
      type: Schema.Types.ObjectId,
      ref: 'ReportLog',
    },
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
    approximatelyToVnd: {
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
