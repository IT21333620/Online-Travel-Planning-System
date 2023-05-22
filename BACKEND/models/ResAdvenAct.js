const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResAdvenActSchema = new Schema({

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
    selectedAdventure:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    noOfDays:{
        type:Number,
        required:true
    },
    from: {
        type : String,
        require : true
    },
    to: {
        type : String,
        require : true
    },
    total:{
        type: Number,
    }


})

const ResAdvenAct = mongoose.model("ResAdvenAct",ResAdvenActSchema);

module.exports=ResAdvenAct;