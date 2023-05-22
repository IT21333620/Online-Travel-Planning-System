const router = require("express").Router();
let InsuranceClaim = require("../models/InsuranceClaim.js");


router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const email= req.body.email;
    const phone = req.body.phone;
    const date = Date(req.body.date);
    const nic = req.body.nic;
    const plan = req.body.plan;
    const description = req.body.description;
 
 

    const newInsuranceClaim = new InsuranceClaim({
        name,
        email,
        phone,
        date,
        nic,
        plan,
        description, 
     
    })

    newInsuranceClaim .save().then(()=>{
        res.json("Customer Claim Added")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    InsuranceClaim.find().then((insuranceClaim)=>{
        res.json(insuranceClaim)
    }).catch((err) =>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res) =>{

    let insuranceId = req.params.id;
    const name = req.body.name;
    const email= req.body.email;
    const phone = req.body.phone;
    const date = Date(req.body.date);
    const nic = req.body.nic;
    const plan = req.body.plan;
    const description = req.body.description;

        const updateInsuranceClaim = {
            name,
            email,
            phone,
            date,
            nic,
            plan,
            description,
        }
        
        const update = await InsuranceClaim.findByIdAndUpdate(insuranceId,updateInsuranceClaim)

        .then(() =>{
            res.status(200).send({status:"Claim Updated data",})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({status : "Error with updating ", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req,res) =>{

    let insuranceId = req.params.id;
    await InsuranceClaim.findByIdAndDelete(insuranceId)
    .then(() =>{
        res.status(200).send({status:"User Deleted",})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with deleting ", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let insuranceId = req.params.id;
    const user = await InsuranceClaim.findById(insuranceId)
    .then((insurance)=>{
        res.json(insurance);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
 
 
    module.exports = router;
