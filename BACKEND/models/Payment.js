const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paymentSchema = new Schema({

name:{
    type : String,
    required :true  
},
phone:{
    type : String,
    required :true 
},
address:{
    type : String,
    required :true 
},
email:{
    type : String,
    required :true 
},

Card:{
    type : String,
    required :true 
    
},
civ:{
    type : String,
    required :true  
}
})
const Payment = mongoose.model("Payment",paymentSchema);
module.exports = Payment;
