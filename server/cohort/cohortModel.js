const mongoose = require ('mongoose');

const CohortSchema = new mongoose.Schema({
	number : {
		type : Number,
		required : true
    },
    name : {
        type : String
    },
	place : {
		type : String,
		//required : true
	},
	date : {
		type : Date
	},
	startDate : {
		type : Date
	},
	endDate : {
		type : Date
	},
	graduationDate : {
		type : Date,
	}

})

const Cohort = mongoose.model('Cohort', CohortSchema);
module.exports = Cohort;
