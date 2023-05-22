const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const insuranceSchema = new Schema({

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

age:{
    type : String,
    required :true 
    
},gender:{
    type : String,
    required :true  
}
})
const Insurance = mongoose.model("Insurance",insuranceSchema);
module.exports = Insurance;