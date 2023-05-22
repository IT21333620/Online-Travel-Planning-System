const router = require("express").Router();
let InsuranceCompany = require("../models/InsuranceCompany.js");


router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const email= req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
 

    const newInsuranceCompany = new InsuranceCompany({
        name,
        email,
        password, 
        phone, 
     
    })

    newInsuranceCompany.save().then(()=>{
        res.json("Company  Added")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    InsuranceCompany.find().then((insuranceCompany)=>{
        res.json(insuranceCompany)
    }).catch((err) =>{
        console.log(err)
    })
})

module.exports = router;