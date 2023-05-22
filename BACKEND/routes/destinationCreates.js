const router = require("express").Router();
const multer = require("multer");
const path = require('path');
const { request} = require("express");

let DestinationCreate = require("../models/DestinationCreate");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, '../frontend/public/images');
      
    },
    filename: (req, file, callback) => {
      const filename = `${Date.now()}-${file.originalname}`;
      callback(null, filename);
    }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    const extname = path.extname(file.originalname);
    if (extname !== '.jpg' && extname !== '.jpeg' && extname !== '.png') {
      return callback(new Error('Only JPG, JPEG, and PNG files are allowed'));
    }
    callback(null,true);
   }
})

const validateFileUpload = (req, res, next) => {
    if (!req.file) {
      return res.status(400).send({ message: 'Please upload a file' });
    }
    next();
  }

router.route("/add").post((upload.single('image')), validateFileUpload, (req, res) => {


    const packageType = req.body.packageType;
    const packageDescription = req.body.packageDescription;
    const location1 = req.body.location1;
    const locationDescription1 = req.body.locationDescription1;
    // const location1PriceLocal = req.body.location1PriceLocal;
    // const location1PriceForeign = req.body.location1PriceForeign;
    const location1map = req.body.location1map;
    const location2 = req.body.location2;
    const locationDescription2 = req.body.locationDescription2;
    // const location2PriceLocal = req.body.location1PriceLocal;
    // const location2PriceForeign = req.body.location1PriceForeign;
    const location2map = req.body.location2map;
    const location3 = req.body.location3;
    const locationDescription3 = req.body.locationDescription3;
    // const location3PriceLocal = req.body.location1PriceLocal;
    // const location3PriceForeign = req.body.location1PriceForeign;
    const location3map = req.body.location3map;
    const location4 = req.body.location4;
    const locationDescription4 = req.body.locationDescription4;
    // const location4PriceLocal = req.body.location1PriceLocal;
    // const location4PriceForeign = req.body.location1PriceForeign;
    const location4map = req.body.location4map;
    const location5 = req.body.location5;
    const locationDescription5 = req.body.locationDescription5;
    // const location5PriceLocal = req.body.location1PriceLocal;
    // const location5PriceForeign = req.body.location1PriceForeign;
    const location5map = req.body.location5map;

    const image = req.file.filename;

    // const location1Img = req.file.filename;
    // const location2Img = req.file.filename;
    // const location3Img = req.file.filename;
    // const location4Img = req.file.filename;
    // const location5Img = req.file.filename;

    
    const newDestinationCreate = new DestinationCreate({

        image,
        packageType,
        packageDescription,
        location1,
        // //location1Img,
        locationDescription1,
        // location1PriceLocal,
        // location1PriceForeign,
        location1map,
        location2,
        // //location2Img,
        locationDescription2,
        // location2PriceLocal,
        // location2PriceForeign,
        location2map,
        location3,
        // //location3Img,
        locationDescription3,
        // location3PriceLocal,
        // location3PriceForeign,
        location3map,
        location4,
        // //location4Img,
        locationDescription4,
        // location4PriceLocal,
        // location4PriceForeign,
        location4map,
        location5,
        // //location5Img,
        locationDescription5,
        // location5PriceLocal,
        // location5PriceForeign,
        location5map
    })

    newDestinationCreate.save().then(()=>{
        res.json("Destination Created")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    DestinationCreate.find().then((destinationCreates)=>{
        res.json(destinationCreates)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const{packageType,  image, packageDescription, location1,  locationDescription1, location1map,location2, locationDescription2, location2map, location3,  locationDescription3, location3map,location4, locationDescription4, location4map,location5, locationDescription5,location5map,} = req.body;

    const updateDestinationCreate = {
        packageType,
        image,
        packageDescription,
        location1,
        //location1Img,
        locationDescription1,
        // location1PriceLocal,
        // location1PriceForeign,
        location1map,
        location2,
        //location2Img,
        locationDescription2,
        // location2PriceLocal,
        // location2PriceForeign,
        location2map,
        location3,
        //location3Img,
        locationDescription3,
        // location3PriceLocal,
        // location3PriceForeign,
        location3map,
        location4,
        //location4Img,
        locationDescription4,
        // location4PriceLocal,
        // location4PriceForeign,
        location4map,
        location5,
        //location5Img,
        locationDescription5,
        // location5PriceLocal,
        // location5PriceForeign,
        location5map
    }

    const update = await DestinationCreate.findByIdAndUpdate(userId, updateDestinationCreate)
    .then(() => {
        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await DestinationCreate.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await DestinationCreate.findById(userId)
      .then((destinationCreate) => {
        res.status(200).send({status: "User fetched", destinationCreate})
      }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
      })
})

module.exports = router;


