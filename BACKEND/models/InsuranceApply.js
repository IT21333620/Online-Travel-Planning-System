const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InsuranceApplySchema = new Schema({


    userId: {
        type :Schema.Types.ObjectId ,ref:"User"
    },
    name : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    plan : {
        type : String,
        require : true
    }
})

const InsuranceApply = mongoose.model("InsuranceApply", InsuranceApplySchema )
module.exports = InsuranceApply;