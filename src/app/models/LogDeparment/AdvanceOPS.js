const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdvanceOPS = new Schema(
  {
    ops: [],
    userUpdate: String,
    userCreate: String,
    creacteAt: String,
    updateAt: String,
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("AdvanceOPS", AdvanceOPS, "AdvanceOPS");
