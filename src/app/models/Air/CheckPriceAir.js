const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CheckPriceAir = new Schema(
  {
    code: {
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
    shippingtype: {
      type: String,
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
    airfreight: {
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
  },
  { timestamps: true, versionKey: false }
); //bỏ __v trong document in mongoose

module.exports = mongoose.model(
  "CheckPriceAir",
  CheckPriceAir,
  "CheckPriceAir"
);
