const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Test = new Schema(
  {
    name: String,
    conditions: [Array],
    colors: [Array],
  },
  { timestamps: true, versionKey: false }
); //bỏ __v trong document in mongoose

module.exports = mongoose.model("Test", Test, "Test");
