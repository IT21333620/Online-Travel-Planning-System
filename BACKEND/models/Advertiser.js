const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const advertiserSchema = new Schema({

    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contactWork : {
        type : String,
        required : true
    },
    contactMobile : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    reEnteredPassword : {
        type : String,
        required : true
    }

})

const Advertiser = mongoose.model("Advertiser",advertiserSchema);

module.exports = Advertiser;