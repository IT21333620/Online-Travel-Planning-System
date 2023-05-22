const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PendingRoomSchema = new Schema({


    name : {
        type : String,
        require : true
    },
    numberofRooms : {
        type : Number,
        require : true
    },
    wheelchair :{
        type : String,
        require : true
    },
    refundable : {
        type: String,
        require :true
    },
    typeOfBeds : {
        type : String,
        require : true
    },
    noOfBeds : {
        type : Number,
        require : true
    },
    sleepers : {
        type : Number,
        require : true
    },
    view : {
        type : String,
        require : true
    },
    area : {
        type : Number,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    image : {
        type : String
    },
    hotelId : {
        type :Schema.Types.ObjectId ,ref:"Hotel",require:true
    }

})

const PendingRoom = mongoose.model("PendingRoom",PendingRoomSchema);

module.exports = PendingRoom;
