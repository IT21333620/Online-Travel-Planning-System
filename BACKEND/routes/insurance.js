const router = require("express").Router();
let Insurance = require("../models/Insurance");


router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const phone = req.body.phone;
    const age = req.body.age;
    const address = req.body.address;
    const email = req.body.email;
    const  gender = req.body.gender;
   

    const newInsurance = new Insurance({
        name,
        phone , 
        age, 
        address,
        email , 
        gender, 
     
    })

    newInsurance.save().then(()=>{
        res.json("New Insurance Customer Added")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    Insurance.find().then((insurance)=>{
        res.json(insurance)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/view/:id").get((req,res) =>{

    Insurance.find().then((insurance)=>{
        res.json(insurance)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) =>{

    let insuranceId = req.params.id;
    const { name,phone,age,address,email,gender,} = req.body;

        const updateInsurance = {
            name,
            phone , 
            age, 
            address,
            email , 
            gender, 
        }
        
        const update = await Insurance.findByIdAndUpdate(insuranceId,updateInsurance)

        .then(() =>{
            res.status(200).send({status:"User Updated data",})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({status : "Error with updating ", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req,res) =>{

    let insuranceId = req.params.id;
    await Insurance.findByIdAndDelete(insuranceId)
    .then(() =>{
        res.status(200).send({status:"User Deleted",})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with deleting ", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let insuranceId = req.params.id;
    const user = await Insurance.findById(insuranceId)
    .then((insurance)=>{
        res.json(insurance);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
 
    module.exports = router;

