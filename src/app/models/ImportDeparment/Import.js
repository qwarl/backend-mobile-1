const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Import = new Schema({
    code: {
        type: String,
        // required: true
    },
    pol: {
        type: String,
        // required: true
    },
    pod: {
        type: String,
        // required: true
    },
    month:{
        type:String,
        // required:true,
    },
    continent:{
        type:String,
        // required:true,
    },
    container: {
        type: String,
        // required: true
    },
    of20: {
        type: String,
        // required: true
    },
    of40: {
        type: String,
        // required: true
    },
    of45: {
        type: String,
        // required: true
    },
    sur20: {
        type: String,
        // required: true
    },
    sur40: {
        type: String,
        // required: true
    },
    sur45: {
        type: String,
        // required: true
    },
    totalfreight: {
        type: String,
        // required: true
    },
    carrier: {
        type: String,
        // required: true
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
    notes: {
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
}, { timestamps: true, versionKey: false })//bỏ __v trong document in mongoose

module.exports = mongoose.model('Import', Import, 'Import');