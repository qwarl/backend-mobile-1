const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Air = new Schema(
  {
    quotationcode:{
      type: String,
    },
    dim: {
      type: String,
      // required: true
    },
    grossweight: {
      type: String,
    },
    month: {
      type: String,
      // required: true
    },
    continent: {
      type: String,
      // required: true
    },
    aol: {
      type: String,
      // required: true
    },
    aod: {
      type: String,
      // required: true
    },
    typeofcargo: {
      type: String,
      // required: true
    },
    airFreight: {
      type: String,
      // required: true
    },
    sur: {
      type: String,
      // required:true,
    },
    airlines: {
      type: String,
      // required:true,
    },
    schedule: {
      type: String,
      // required: true
    },
    transittime: {
      type: String,
      // required: true
    },
    valid: {
      type: String,
      // required: true
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
    // createdAt: {
    //     type: Date,
    //     default: () => new Date(+new Date() + 7 * 60 * 60 * 1000)
    // },
    // // convert UTC time to local time, MongoDB stores times in UTC by default,
    // // and converts any local time representations into this form.
    // // detail in https://stackoverflow.com/questions/29899208/mongoose-date-field-set-default-to-date-now-n-days

    // updatedAt: {
    //     type: Date,
    //     default: () => new Date(+new Date() + 7 * 60 * 60 * 1000)
    // }
    // neu co van de trong viec hien gio khong giong voi dong ho thi thu bo cmt 60-71 xem
  },
  { timestamps: true, versionKey: false }
); //bỏ __v trong document in mongoose

module.exports = mongoose.model("Air", Air, "Air");
