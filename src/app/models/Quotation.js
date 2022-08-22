const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quotation = new Schema({
    pol: {
        type: String,
        required: true
    },
    pod: {
        type: String,
        required: true
    },
    of20gp: {
    type: Number,
    required: true
},
    of40gp: {
    type: Number,
    required: true
},
    of45gp: {
    type: Number,
    required: true
},
    sur20: {
    type: String,
    required: true
},
    sur40: {
    type: String,
    required: true
},
    lines: {
    type: String,
    required: true
},
    freeTime: {
    type: String,
    required: true
},
    valid: {
    type: String,
    required: true
},
    notes: {
    type: String,
    required: true
},
    userCreate: {
    type: String,
    required: true
},
    userUpdate: {
    type: String,
},
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Quotation', Quotation, 'Quotation');