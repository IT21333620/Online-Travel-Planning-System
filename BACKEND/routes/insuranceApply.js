const router = require("express").Router();
let InsuranceApply = require("../models/InsuranceApply.js");


router.route("/add").post((req,res) =>{

    const userId = req.body.userId;
    const name = req.body.name;
    const phone = req.body.phone;
    const  price = req.body.price;
    const plan= req.body.plan;
 

    const newInsuranceApply = new InsuranceApply({
        userId,
        name,
       phone,
        price,
       plan
     
    })

    newInsuranceApply.save().then(()=>{
        res.json("Plan Added")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    InsuranceApply.find().then((insuranceApply)=>{
        res.json(insuranceApply)
    }).catch((err) =>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res) =>{

    let insuranceId = req.params.id;
    const { name,phone,email,plan} = req.body;

        const updateInsuranceApply = {
            name,
            phone,
            price,
            plan,
        }
        
        const update = await InsuranceApply.findByIdAndUpdate(insuranceId,updateInsuranceApply)

        .then(() =>{
            res.status(200).send({status:"User Updated data",})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({status : "Error with updating ", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req,res) =>{

    let insuranceId = req.params.id;
    await InsuranceApply.findByIdAndDelete(insuranceId)
    .then(() =>{
        res.status(200).send({status:"User Deleted",})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with deleting ", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let insuranceId = req.params.id;
    const user = await InsuranceApply.findById(insuranceId)
    .then((insurance)=>{
        res.json(insurance);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
router.route("/getuser/:id").get(async(req,res)=>{
    let id = req.params.id;
    const user = await InsuranceApply.find({userId:id})
    .then((insurance)=>{
        res.json(insurance);
    }).catch((err)=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
 
    module.exports = router;
