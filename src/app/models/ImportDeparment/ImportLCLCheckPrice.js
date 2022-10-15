const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImportLCLCheckPrice = new Schema({
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
    cargo: {
        type: String,
        // required: true
    },
    of: {
        type: String,
        // required: true
    },
    localpol: {
        type: String,
        // required: true
    },
    localpod: {
        type: String,
        // required: true
    },
    term: {
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
}, { timestamps: true, versionKey: false })//bỏ __v trong document in mongoose

module.exports = mongoose.model('ImportLCLCheckPrice', ImportLCLCheckPrice, 'ImportLCLCheckPrice');