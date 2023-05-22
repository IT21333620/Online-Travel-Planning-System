const router = require("express").Router();
const VehicleDriver = require("../models/VehicleDriver");


router.route("/add").post((req,res) =>{
    const driverName = req.body.driverName;
    const address = req.body.address;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber;
    const yearsOfExperience = req.body.yearsOfExperience;
    const nic = req.body.nic;
    const age = req.body.age;
    const licenseNumber = req.body.licenseNumber;

    const newVehicleDriver = new VehicleDriver({
        driverName,
        address,
        email,
        password,
        phoneNumber,
        yearsOfExperience,
        nic,
        age,
        licenseNumber
    })

    newVehicleDriver.save().then(()=>{
        res.json("Driver Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get ((req, res)=>{

    VehicleDriver.find().then((vehicleDriver)=>{
        res.json(vehicleDriver)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let vehicleDriverId = req.params.id;
    const user = await VehicleReserve.findById(vehicleDriverId)
    .then((driver)=>{
        res.json(driver);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let vehicleDriverId = req.params.id;

    await VehicleDriver.findByIdAndDelete(vehicleDriverId).then(() =>{
        res.status(200).send({status: "Driver deleted"});
    }).catch((err) =>{
        console.log(err);
    })
})

module.exports = router;