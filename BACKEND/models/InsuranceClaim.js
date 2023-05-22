const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InsuranceClaimSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    date : {
        type : String,
        require : true
    },
  
    nic : {
        type : String,
        require : true
    },
    plan : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    }
})

const InsuranceClaim = mongoose.model("InsuranceClaim", InsuranceClaimSchema)
module.exports = InsuranceClaim;