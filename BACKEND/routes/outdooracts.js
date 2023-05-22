const router = require("express").Router();
const { request } = require("express");
const multer = require("multer");
const path = require('path');
let OutdoorAct = require("../models/OutdoorAct");



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


router.route("/add").post(upload.single('image'), validateFileUpload, (req,res) =>{

    const act_name = req.body.act_name;
    const location = req.body.location;
    const description = req.body.description;
    const ticketprice = req.body.ticketprice;
    const image = req.file.filename;
    const maplocation = req.body.maplocation;
    const longdescription = req.body.longdescription;

    const newOutdoorAct = new OutdoorAct({

        act_name,
        location,
        description,
        ticketprice,
        image,
        maplocation,
        longdescription
    })

    
    newOutdoorAct.save().then(()=>{
        res.json("OutdoorAct Added");
    }).catch((err)=>{
        console.log(err);
    })
})





router.route("/").get((req,res)=>{

    OutdoorAct.find().then((outdooracts)=>{
        res.json(outdooracts)
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/update/:id").put(async(req,res)=> {
    let userId = req.params.id;
    const {act_name, location, description, ticketprice, maplocation, longdescription} = req.body;

    const updatenewOutdoorAct = {
        act_name,
        location,
        description,
        ticketprice,
        maplocation,
        longdescription
    }

    const update = await OutdoorAct.findByIdAndUpdate(userId, updatenewOutdoorAct)
    .then(()=>{

        res.status(200).send({status: "User updated"})

    }).catch((err) => {
      console.log(err);
      res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await OutdoorAct.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})


router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await OutdoorAct.findById(userId)
    .then((newOutdoorAct) => {
       res.json(newOutdoorAct)
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", reeror: err.message});
    })
})






module.exports = router;