const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CustomerSchema = new Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    dob: {
        type: String,
        require:true
    },
    gender: {
        type: String,
        require:true
    },
    city: {
        type: String,
        require:true
    },
    phone: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    }
});

Customer = mongoose.model('customer', CustomerSchema);
module.exports = Customer;