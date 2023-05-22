const mongoose = require('mongoose');

const schema = mongoose.schema;

const DestinationCreateSchema = new mongoose.Schema ({

    packageType : {
      type : String,
     required: true
   },
    image : {
        type : String,
        required: true
    },
    packageDescription : {
      type : String,
      required: true
    },
    location1 :{
      type:String,
      required:true
     },
    // location1Img : {
    //     type :String,
    //     required: true
    // },
    locationDescription1:{
       type:String,
       required:true
     },
    //  location1PriceLocal :{
    //   type:Number,
    //   required:true
    //  },
    //  location1PriceForeign :{
    //   type:Number,
    //   required:true
    //  },
    location1map : {
        type :String,
        required: true
    },
    location2 :{
       type:String,
      required:true
    },
    // location2Img : {
    //     type :String,
    //     required: true
    // },
    locationDescription2:{
       type:String,
       required:true
    },
    // location2PriceLocal :{
    //   type:Number,
    //   required:true
    //  },
    //  location2PriceForeign :{
    //   type:Number,
    //   required:true
    //  },
    location2map : {
        type :String,
      required: true
    },
    location3 :{
     type:String,
     required: true
    },
    // location3Img : {
    //     type :String,
    //     required: true
    // },
    locationDescription3:{
        type:String,
      required:true
    },
    // location3PriceLocal :{
    //   type:Number,
    //   required:true
    //  },
    //  location3PriceForeign :{
    //   type:Number,
    //   required:true
    //  },
     location3map : {
        type :String,
        required: true
     },
    location4 :{
       type:String,
      required:true
    },
    // location4Img : {
    //     type :String,
    //     required: true
    // },
    locationDescription4:{
       type:String,
       required:true
     },
    //  location4PriceLocal :{
    //   type:Number,
    //   required:true
    //  },
    //  location4PriceForeign :{
    //   type:Number,
    //   required:true
    //  },
    location4map : {
       type :String,
         required: true
     },
     location5 :{
         type:String,
        required:true
     },
    // location5Img : {
    //     type :String,
    //     required: true
    // },
    locationDescription5:{
         type:String,
        required:true
    },
    // location5PriceLocal :{
    //   type:Number,
    //   required:true
    //  },
    //  location5PriceForeign :{
    //   type:Number,
    //   required:true
    //  },
    location5map : {
         type :String,
         required: true
    }
    

});

module.exports = mongoose.model('destinationCreates' ,DestinationCreateSchema)