const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VehicleReserveSchema = new Schema({
    from : {
        type : String,
        require : true
    },
    to : {
        type : String,
        require : true
    },
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    mobile : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    totalPrice : {
        type : Number,
        require : true
    }
})

const VehicleReserve = mongoose.model("VehicleReserve", VehicleReserveSchema)
module.exports = VehicleReserve;