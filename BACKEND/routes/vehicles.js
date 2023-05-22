const router = require("express").Router();
const Vehicle = require("../models/Vehicle");
const path = require('path');
const multer = require("multer");


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



router.route("/add").post(upload.single('image'), validateFileUpload, (req, res) =>{
    const vehicleOwnerName = req.body.vehicleOwnerName;
    const address = req.body.address;
    const emailAddress = req.body.emailAddress;
    const phoneNumber = req.body.phoneNumber;
    const vehicleModel = req.body.vehicleModel;
    const vehicleYearOfManufacture = req.body.vehicleYearOfManufacture;
    const licensePlateNumber = req.body.licensePlateNumber;
    const color = req.body.color;
    const vehicleCondition = req.body.vehicleCondition;
    const noOfSeats = req.body.noOfSeats;
    const type = req.body.type;
    const transmission = req.body.transmission;
    const currentMilage = req.body.currentMilage;
    const expectedMilage = req.body.expectedMilage;
    const specialNotes = req.body.specialNotes;
    const price = req.body.price;
    const rentStatus = req.body.rentStatus;
    const maintDaysCap = req.body.maintDaysCap;//To calculate the total days from the last maintenance
    const maintenanceStatus = req.body.maintenanceStatus;
    const image = req.file.filename;  

    const newVehicle = new Vehicle({
        vehicleOwnerName,
        address,
        emailAddress,
        phoneNumber,
        vehicleModel,
        vehicleYearOfManufacture,
        licensePlateNumber,
        color,
        vehicleCondition,
        noOfSeats,
        type,
        transmission,
        currentMilage,
        expectedMilage,
        specialNotes,
        price,
        rentStatus, 
        maintDaysCap,
        maintenanceStatus,
        image
        
    })

    newVehicle.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get ((req, res)=>{

    Vehicle.find().then((vehicles)=>{
        res.json(vehicles)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) =>{
    let vehicleId = req.params.id;
    const {vehicleOwnerName, specialNotes, expectedMilage, currentMilage, transmission, type, noOfSeats, vehicleCondition, color, licensePlateNumber, vehicleYearOfManufacture, vehicleModel, phoneNumber, emailAddress, address, price, rentStatus, image, maintDaysCap, maintenanceStatus} = req.body;

    const updateVehicle = {
        vehicleOwnerName,
        address,
        emailAddress,
        phoneNumber,
        vehicleModel,
        vehicleYearOfManufacture,
        licensePlateNumber,
        color,
        vehicleCondition,
        noOfSeats,
        type,
        transmission,
        currentMilage,
        expectedMilage,
        specialNotes,
        price,
        rentStatus,
        maintDaysCap, 
        maintenanceStatus, 
        image
    }

    const update = await Vehicle.findByIdAndUpdate(vehicleId, updateVehicle).then(() =>{
        res.status(200).send({status: "Vehicle updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error in updating data"});
    })
    
})

router.route("/delete/:id").delete(async(req, res) =>{
    let vehicleId = req.params.id;

    await Vehicle.findByIdAndDelete(vehicleId).then(() =>{
        res.status(200).send({status: "User deleted"});
    }).catch((err) =>{
        console.log(err);
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let vehicleId = req.params.id;
    const vehicle = await Vehicle.findById(vehicleId)
    .then((vehicle)=>{
        res.json(vehicle);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})



module.exports = router;