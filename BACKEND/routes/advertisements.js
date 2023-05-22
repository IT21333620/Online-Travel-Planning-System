const router = require("express").Router();
const multer = require("multer");
const path = require('path');
const fs = require('fs');
const { request } = require("express");
let Advertisement = require("../models/Advertisement");
let Advertiser = require("../models/Advertiser");

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
    callback(null, true);
  }
})

const validateFileUpload = (req, res, next) => {
  if (!req.file) {
    return res.status(400).send({ message: 'Please upload a file' });
  }
  next();
}

router.route("/addAdvertisement/:advertiserId").post(upload.single('image'), validateFileUpload, (req, res) => {
  
  let advertiserId = req.params.advertiserId;
  const { packageNo, category, website, time, note, price } = req.body;
  const image = req.file.filename;

  const newAdvertisement = new Advertisement({
      packageNo,
      category,
      website,
      time,
      image,
      note,
      price,
      advertiserId
  })

  newAdvertisement.save().then(() => {
    res.json("Advertisement added");
  }).catch((error) => {
    console.log(error);
    res.status(500).json({ error: 'Failed to add advertisement' });
  })
})

router.route("/viewAdvertiserAdvertisements/:advertiserId").get(async(req,res) =>{

   const advertisement = await Advertisement.find({advertiserId: req.params.advertiserId})
       .then((advertisement) =>{
           res.json(advertisement);
       }).catch((err) =>{
           console.log(err.message);
          res.status(500).send({status : "Error with get advertiser ", error: err.message});
       })
 })

router.route("/viewAdvertisements").get((req,res) => {

  Advertisement.find({}, {  note: 0}).then((advertisements) => {
    res.json(advertisements)
  }).catch((error => {
    console.log(error)
  }))
})

router.route("/update/:advertisementId").put(upload.single('image'), async(req,res) => {

  let advertisementId = req.params.advertisementId;
  const status = req.body.status;

  const updateAdvertisement = {
    status
  }

  const update = await Advertisement.findByIdAndUpdate(advertisementId,updateAdvertisement)
        .then(() => {
            res.status(200).send({status : "Advertisement updated"})
        }).catch((error) => {
            console.log(error)
            res.status(500).send({status : "Error with updating data", error : error.message});
        })
})

router.route("/delete/:advertisementId").delete(async(req,res) => {

  let advertisementId = req.params.advertisementId;

  await Advertisement.findByIdAndDelete(advertisementId)
  .then(() =>
        {
            res.status(200).send({status : "Advertisement deleted"})
        }).catch((error) => {
            console.log(error.message);
            res.status(500).send({status : "Error with delete advertisement", error : error.message});
        })
})


router.route("/acceptedAdvertisements").get(async(req,res) =>{

  const advertisement = await Advertisement.find({status: "Accepted"})
      .then((advertisement) =>{
          res.json(advertisement);
      }).catch((err) =>{
          console.log(err.message);
         res.status(500).send({status : "Error with get accepted advertisements ", error: err.message});
      })
})


module.exports = router;