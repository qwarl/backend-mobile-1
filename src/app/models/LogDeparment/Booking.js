const mongoose = require('mongoose')

const { Schema } = mongoose

const Booking = new Schema(
  {
    // code: {
    //   type: String,
    // },
    // month: {
    //   type: String,
    //   // required: true
    // },
    // idfile: {
    //   type: String,
    // },
    // type: {
    //   type: String,
    // },
    // customer: {
    //   type: String,
    // },
    // numberDeclaration: {
    //   type: String,
    // },
    // dayDeclaration: {
    //   type: String,
    // },
    // stream: {
    //   type: String,
    // },
    // typeProduct: {
    //   type: String,
    //   // required:true,
    // },
    // quantity: {
    //   FCL: {
    //     quantityFCL: {
    //       type: Number,
    //     },
    //     unit: {
    //       type: Array,
    //     },
    //   },
    //   LCL: {
    //     type: Number,
    //   },
    //   Air: {
    //     type: Number,
    //   },
    //   // typeOfContainer: {
    //   //   type: Array,
    //   // },
    //   otherType: {
    //     nameOfOtherType: {
    //       type: String,
    //     },
    //     quantityOfOtherType: {
    //       type: Number,
    //     },
    //   },
    // },
    // numberBale: {
    //   type: String,
    // },
    // baleType: {
    //   type: String,
    // },
    // weight: {
    //   type: Number,
    // },
    // // container: {
    // //   type: String,
    // // },
    // numberContainer: {
    //   type: String,
    // },
    // name: {
    //   type: String,
    //   // required: true
    // },
    // supplier: {
    //   type: String,
    // },
    // supplier1: {
    //   type: String,
    // },
    // supplier2: {
    //   type: String,
    // },
    // pol: {
    //   type: String,
    //   // required: true
    // },
    // pod: {
    //   type: String,
    //   // required: true
    // },
    // dayGo: {
    //   type: String,
    // },
    // dayArrive: {
    //   type: String,
    // },
    // salesContract: {
    //   type: String,
    // },
    // daySalesContract: {
    //   type: String,
    // },
    // invoice: {
    //   type: String,
    // },
    // dayInvoice: {
    //   type: String,
    // },
    // packing: {
    //   type: String,
    // },
    // dayPacking: {
    //   type: String,
    // },
    // billBooking: {
    //   type: String,
    // },
    // dayBillBooking: {
    //   type: String,
    // },
    // debit: {
    //   type: String,
    // },
    // sales: {
    //   type: String,
    // },
    // docs: {
    //   type: String,
    // },
    // ops: {
    //   type: String,
    // },
    // note: {
    //   type: String,
    // },
    // userCreate: {
    //   type: String,
    //   // required: true
    // },
    // userUpdate: {
    //   type: String,
    // },
    // creacteAt: {
    //   type: String,
    // },
    // updateAt: {
    //   type: String,
    // },
    // year: {
    //   type: String,
    // },

    code: {
      type: String,
    },
    month: {
      type: String,
      // required: true
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
    supplier: {
      type: String,
    },
    supplier1: {
      type: String,
    },
    supplier2: {
      type: String,
    },
    pol: {
      type: String,
      // required: true
    },
    daygo: {
      type: String,
    },
    pod: {
      type: String,
      // required: true
    },
    dayarrive: {
      type: String,
    },
    salescontract: {
      type: String,
    },
    daysalescontract: {
      type: String,
    },
    invoice: {
      type: String,
    },
    dayinvoice: {
      type: String,
    },
    packing: {
      type: String,
    },
    daypacking: {
      type: String,
    },
    billbooking: {
      type: String,
    },
    daybillbooking: {
      type: String,
    },
    debit: {
      type: String,
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
    note: {
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
) // bỏ __v trong document in mongoose

module.exports = mongoose.model('Booking', Booking, 'Booking')
