const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Booking = new Schema(
	{
		code: {
			type: String,
		},
		// reportFileId: {
		// 	type: Schema.Types.ObjectId,
		// 	ref: 'Report.Log'
		// },
		sellDetail: {
			type: Array,
		},
		month: {
			type: String,
			// required: true
		},
		idfile: {
			type: String,
		},
		type: {
			type: String,
			// required: true
		},
		customer: {
			type: String,
		},
		numberdeclaration: {
			type: String,
		},
		daydeclaration: {
			type: String,
		},
		stream: {
			type: String,
		},
		typeProduct: {
			type: String,
			// required:true,
		},
		quantity: {
			type: String,
			// required:true,
		},
		numberbale: {
			type: String,
		},
		baletype: {
			type: String,
		},
		weight: {
			type: String,
		},
		container: {
			type: String,
		},
		numbercotainer: {
			type: String,
		},
		name: {
			type: String,
			// required: true
		},
		supplier: {
			type: String,
		},
		supplier1: {
			type: String,
		},
		supplier2: {
			type: String,
		},
		pol: {
			type: String,
			// required: true
		},
		daygo: {
			type: String,
		},
		pod: {
			type: String,
			// required: true
		},
		dayarrive: {
			type: String,
		},
		salescontract: {
			type: String,
		},
		daysalescontract: {
			type: String,
		},
		invoice: {
			type: String,
		},
		dayinvoice: {
			type: String,
		},
		packing: {
			type: String,
		},
		daypacking: {
			type: String,
		},
		billbooking: {
			type: String,
		},
		daybillbooking: {
			type: String,
		},
		debit: {
			type: String,
		},
		sales: {
			type: String,
		},
		docs: {
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

module.exports = mongoose.model("Booking", Booking, "Booking");
