const mongoose = require('mongoose');

const schema = mongoose.schema;

const DestinationmanagerSchema = new mongoose.Schema ({

    fname : {
        type : String,
        required: true
    },
    lname : {
        type : String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('destinationmanagers' ,DestinationmanagerSchema)