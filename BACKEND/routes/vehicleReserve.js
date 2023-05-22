const router = require("express").Router();
const VehicleReserve = require("../models/VehicleReserve");


router.route("/add").post((req,res) =>{
    const from = req.body.from;
    const to = req.body.to;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const totalPrice = req.body.totalPrice;

    const newVehicleReserve = new VehicleReserve({
        from,
        to,
        firstName,
        lastName,
        mobile,
        email,
        totalPrice,
    })

    newVehicleReserve.save().then(()=>{
        res.json("Price Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get ((req, res)=>{

    VehicleReserve.find().then((vehicleReserve)=>{
        res.json(vehicleReserve)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) =>{
    let vehicleReserveId = req.params.id;
    const {from, to, firstName, lastName, mobile, email, totalPrice} = req.body;

    const updateVehicleReserve = {
        from,
        to,
        firstName,
        lastName,
        mobile,
        email,
        totalPrice,
    }

    const update = await VehicleReserve.findByIdAndUpdate(vehicleReserveId, updateVehicleReserve).then(() =>{
        res.status(200).send({status: "Reserve updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error in updating data"});
    })
    
})

router.route("/delete/:id").delete(async(req, res) =>{
    let vehicleReserveId = req.params.id;

    await VehicleReserve.findByIdAndDelete(vehicleReserveId).then(() =>{
        res.status(200).send({status: "Reserve deleted"});
    }).catch((err) =>{
        console.log(err);
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let vehicleReserveId = req.params.id;
    const user = await VehicleReserve.findById(vehicleReserveId)
    .then((vehicle)=>{
        res.json(vehicle);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})



module.exports = router;