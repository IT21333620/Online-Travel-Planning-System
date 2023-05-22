const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InsuranceFeedbackSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    feedback : {
        type : String,
        require : true
    },
    ratings : {
        type : String,
        require : true
    }
})

const InsuranceFeedback = mongoose.model("InsuranceFeedback", InsuranceFeedbackSchema)
module.exports = InsuranceFeedback;