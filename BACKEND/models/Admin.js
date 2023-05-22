const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema = new Schema({

    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const Admin = mongoose.model("Admin",AdminSchema);
module.exports = Admin;