const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const outdoorfeedbackSchema = new Schema({

    feedback : {
        type : String,
        required : true
    }


})

const OutdoorFeedback = mongoose.model("OutdoorFeedback",outdoorfeedbackSchema);

module.exports =OutdoorFeedback;