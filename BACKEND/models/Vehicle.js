const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
    vehicleOwnerName : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    emailAddress : {
        type : String,
        require : true
    },
    phoneNumber : {
        type : String,
        require : true
    },
    vehicleModel : {
        type : String,
        require : true
    },
    vehicleYearOfManufacture : {
        type : String,
        require : true
    },
    licensePlateNumber : {
        type : String,
        require : true
    },
    color : {
        type : String
    },
    vehicleCondition : {
        type : String
    },
    noOfSeats : {
        type : String
    },
    type : {
        type : String,
        require : true
    },
    transmission : {
        type : String
    },
    currentMilage : {
        type : String
    },
    expectedMilage : {
        type : String
    },
    specialNotes : {
        type : String
    },
    price : {
        type : String
    },
    rentStatus : {
        type : String
    },
    maintenanceStatus : {
        type : String
    },
    maintDaysCap : {
        type : Number
    },
    image : {
        type : String
    }

})

const Vehicle = mongoose.model("Vehicle", VehicleSchema)
module.exports = Vehicle;