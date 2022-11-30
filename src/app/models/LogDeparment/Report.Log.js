const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReportLog = new Schema(
  {
    info: {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
    },
    sellReport: [{
      type: Schema.Types.ObjectId,
      ref: 'Sell',
    }],
    // sellReport: {
    //   type: Array,
    // },
    buyReport: {
      type: Array,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model('ReportLog', ReportLog, 'ReportLog');
