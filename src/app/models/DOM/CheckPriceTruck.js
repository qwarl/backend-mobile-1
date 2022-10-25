const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CheckPriceTruck = new Schema(
  {
    code: {
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
    container: {
      type: String,
    },
    typetruck: {
      type: String,
    },
    productname: {
      type: String,
      // required: true
    },
    weight: {
      type: String,
      // required: true
    },
    width: {
      type: String,
      // required: true
    },
    height: {
      type: String,
      // required: true
    },
    length: {
      type: String,
      // required:true,
    },
    quantitycarton: {
      type: String,
      // required:true,
    },
    quantitypallet: {
      type: String,
      // required: true
    },
    addressdelivery: {
      type: String,
      // required: true
    },
    addressreceive: {
      type: String,
      // required: true
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
  "CheckPriceTruck",
  CheckPriceTruck,
  "CheckPriceTruck"
);
