const mongoose = require('mongoose')

const { Schema } = mongoose

const Booking = new Schema(
  {
    code: {
      type: String,
    },
    idfile: {
      type: String,
    },
    type: {
      type: String,
      // required: true
    },
    customer: {
      type: String,
    },
    numberdeclaration: {
      type: String,
    },
    daydeclaration: {
      type: String,
    },
    stream: {
      type: String,
    },
    typeProduct: {
      type: String,
      // required:true,
    },
    quantity: {
      type: String,
      // required:true,
    },
    numberbale: {
      type: String,
    },
    baletype: {
      type: String,
    },
    weight: {
      type: String,
    },
    container: {
      type: String,
    },
    numbercotainer: {
      type: String,
    },
    name: {
      type: String,
      // required: true
    },
    sales: {
      type: String,
    },
    docs: {
      type: String,
    },
    ops: {
      type: String,
    },
    typechargebuy: {
      type: String,
    },
    quantitybuy: {
      type: String,
    },
    unitpricebuy: {
      type: String,
    },
    coinbuy: {
      type: String,
    },
    toltalbuy: {
      type: String,
    },
    vatbuy: {
      type: String,
    },
    intomoneybuy: {
      type: String,
    },
    numberbillbuy: {
      type: String,
    },
    notebuy: {
      type: String,
    },
    typechargebuy1: {
      type: String,
    },
    quantitybuy1: {
      type: String,
    },
    unitpricebuy1: {
      type: String,
    },
    coinbuy1: {
      type: String,
    },
    toltalbuy1: {
      type: String,
    },
    vatbuy1: {
      type: String,
    },
    intomoneybuy1: {
      type: String,
    },
    numberbillbuy1: {
      type: String,
    },
    notebuy1: {
      type: String,
    },
    typechargebuy2: {
      type: String,
    },
    quantitybuy2: {
      type: String,
    },
    unitpricebuy2: {
      type: String,
    },
    coinbuy2: {
      type: String,
    },
    toltalbuy2: {
      type: String,
    },
    vatbuy2: {
      type: String,
    },
    intomoneybuy2: {
      type: String,
    },
    numberbillbuy2: {
      type: String,
    },
    notebuy2: {
      type: String,
    },
    typechargebuy3: {
      type: String,
    },
    quantitybuy3: {
      type: String,
    },
    unitpricebuy3: {
      type: String,
    },
    coinbuy3: {
      type: String,
    },
    toltalbuy3: {
      type: String,
    },
    vatbuy3: {
      type: String,
    },
    intomoneybuy3: {
      type: String,
    },
    numberbillbuy3: {
      type: String,
    },
    notebuy3: {
      type: String,
    },
    typechargebuy4: {
      type: String,
    },
    quantitybuy4: {
      type: String,
    },
    unitpricebuy4: {
      type: String,
    },
    coinbuy4: {
      type: String,
    },
    toltalbuy4: {
      type: String,
    },
    vatbuy4: {
      type: String,
    },
    intomoneybuy4: {
      type: String,
    },
    numberbillbuy4: {
      type: String,
    },
    notebuy4: {
      type: String,
    },
    typechargebuy5: {
      type: String,
    },
    quantitybuy5: {
      type: String,
    },
    unitpricebuy5: {
      type: String,
    },
    coinbuy5: {
      type: String,
    },
    toltalbuy5: {
      type: String,
    },
    vatbuy5: {
      type: String,
    },
    intomoneybuy5: {
      type: String,
    },
    numberbillbuy5: {
      type: String,
    },
    notebuy5: {
      type: String,
    },
    typechargebuy6: {
      type: String,
    },
    quantitybuy6: {
      type: String,
    },
    unitpricebuy6: {
      type: String,
    },
    coinbuy6: {
      type: String,
    },
    toltalbuy6: {
      type: String,
    },
    vatbuy6: {
      type: String,
    },
    intomoneybuy6: {
      type: String,
    },
    numberbillbuy6: {
      type: String,
    },
    notebuy6: {
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
)
module.exports = mongoose.model('Booking', Booking, 'Booking')
