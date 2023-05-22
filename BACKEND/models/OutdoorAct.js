const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OutdooractSchema = new Schema({

    act_name : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required :true
    },
    description : {
        type : String,
        required : true

    },
    ticketprice : {
        type : String,
        required : true

    },
    image : {
        type : String,
        required : true

    },
    maplocation : {
        type : String,
        required : true

    },
    longdescription : {
        type : String,
        required : true

    }


})

const OutdoorAct = mongoose.model("OutdoorAct",OutdooractSchema);

module.exports =OutdoorAct;