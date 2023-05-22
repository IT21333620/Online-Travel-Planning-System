const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InsuranceCompanySchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    }
})

const InsuranceCompany = mongoose.model("InsuranceCompany", InsuranceCompanySchema)
module.exports = InsuranceCompany;