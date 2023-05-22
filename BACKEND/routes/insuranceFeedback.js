const router = require("express").Router();
let InsuranceFeedback = require("../models/InsuranceFeedback.js");


router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const email= req.body.email;
    const feedback = req.body.feedback;
    const ratings = req.body.ratings;
 

    const newInsuranceFeedback = new InsuranceFeedback({
        name,
        email,
        feedback, 
        ratings, 
     
    })

    newInsuranceFeedback.save().then(()=>{
        res.json("Customer Feedback Added")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    InsuranceFeedback.find().then((insuranceFeedback)=>{
        res.json(insuranceFeedback)
    }).catch((err) =>{
        console.log(err)
    })
})
router.route("/update/:id").put(async(req,res) =>{

    let insuranceId = req.params.id;
    const { name,email,feedback,ratings} = req.body;

        const updateInsuranceFeedback = {
        name,
        email,
        feedback, 
        ratings, 
        }
        
        const update = await InsuranceFeedback.findByIdAndUpdate(insuranceId,updateInsuranceFeedback)

        .then(() =>{
            res.status(200).send({status:"User Updated data",})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({status : "Error with updating ", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req,res) =>{

    let insuranceId = req.params.id;
    await InsuranceFeedback.findByIdAndDelete(insuranceId)
    .then(() =>{
        res.status(200).send({status:"User Deleted",})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with deleting ", error: err.message});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let insuranceId = req.params.id;
    const user = await InsuranceFeedback.findById(insuranceId)
    .then((insurance)=>{
        res.json(insurance);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
 
    module.exports = router;
