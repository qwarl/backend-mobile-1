const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogCheckPrice = new Schema(
  {
    name: {
      type: String,
      // required: true
    },
    code: {
      type: String,
    },
    month: {
      type: String,
      // required: true
    },
    freight: {
      type: String,
      // required: true
    },
    hsCode: {
      type: String,
      // required: true
    },
    function: {
      type: String,
      // required: true
    },
    //thu bo cmt neu gap loi nay
    // Error: PhongLog validation failed: image: Path `image` is required.
    image: {
      type: String,
      // minimize: false
    },
    pol: {
      type: String,
      // required: true
    },
    pod: {
      type: String,
      // required: true
    },
    typeProduct: {
      type: String,
      // required:true,
    },
    quantity: {
      type: String,
      // required:true,
    },
    requirement: {
      type: String,
      // required: true
    },
    price: {
      type: String,
      // required: true
    },
    type: {
      type: String,
      // required: true
    },
    policy: {
      type: String,
    },
    referencefee: {
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
  { timestamps: true, versionKey: false }
); //bỏ __v trong document in mongoose

module.exports = mongoose.model(
  "LogCheckPrice",
  LogCheckPrice,
  "LogCheckPrice"
);
