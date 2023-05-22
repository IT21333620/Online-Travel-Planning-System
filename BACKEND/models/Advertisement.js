const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const advertisementSchema = new Schema({

    packageNo : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    website : {
        type : String,
        required : true
    },
    time : {
        type : String,
    },
    image : {
        type : String,
        required : true
    },
    note : {
        type : String
    },
    price : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default:"pending"
    },
    advertiserId : {
        type :Schema.Types.ObjectId ,ref:"Advertiser",require:true
    }
})

const Advertisement = mongoose.model("Advertisement",advertisementSchema);

module.exports = Advertisement;