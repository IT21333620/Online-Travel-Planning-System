const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const HotelSchema = new Schema({

    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    hotelName : {
        type : String,
        require : true
    },
    email:{
        type : String,
        require :true

    },
    description: {
        type:String,
        require :true
    },
    checkingIn :{
        type:String,
        require:true
    },
    checkOut :{
        type:String,
        require:true
    },
    minAge:{
        type:Number,
        require:true
    },
    pets:{
        type:String,
        require:true
    },
    policy:{
        type:String
    },
    googleMap:{
        type:String,
        requiree:true
    },
    address : {
        type : String,
        require : true
    },
    phoneNo : {
        type : String,
        require: true
    },
    password : {
        type : String,
        require : true
    },
    refund : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    wifi : {
        type : Boolean,
        default: false
    },
    pool : {
        type : Boolean,
        default: false
    },
    Laundry : {
        type : Boolean,
        default: false
    },
    park : {
        type : Boolean,
        default: false
    },
    ac : {
        type : Boolean,
        default: false
    },
    frontDesk : {
        type : Boolean,
        default: false
    },
    restaurant : {
        type : Boolean,
        default: false
    },
    bar : {
        type : Boolean,
        default: false
    },
    spa : {
        type : Boolean,
        default: false
    },
    Image1:{
        type : String
    },
    Image2:{
        type : String
    },
    Image3:{
        type : String
    },
    Image4:{
        type : String
    },
    Image5:{
        type : String
    },
    Image6:{
        type : String
    }
})

const Hotel = mongoose.model("Hotel",HotelSchema);
module.exports = Hotel;
