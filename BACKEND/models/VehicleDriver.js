const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleDriverSchema = new Schema({
    driverName : {
        type : String,
        require : true
    },
    address : {
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
    phoneNumber : {
        type : String,
        require : true
    },
    yearsOfExperience : {
        type : String,
        require : true
    },
    nic : {
        type : String,
        require : true
    },
    age : {
        type : String,
        require : true
    },
    licenseNumber : {
        type : String,
        require : true
    }
})

const VehicleDriver = mongoose.model("VehicleDriver", VehicleDriverSchema)
module.exports = VehicleDriver;