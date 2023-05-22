const router = require("express").Router();
const { request } = require("express");
let ResAdvenAct = require("../models/ResAdvenAct");





router.route("/add").post((req,res) =>{

    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const email = req.body.email;
    const contactNo = req.body.contactNo;
    const selectedAdventure = req.body.selectedAdventure;
    const date = req.body.date;
    const noOfDays = Number(req.body.noOfDays);
    const from = req.body.from;
    const to = req.body.to;
    const total = Number(req.body.total);


    const newResAdvenAct = new ResAdvenAct({

        fname,
        lname,
        address,
        email,
        contactNo,
        selectedAdventure,
        date,
        noOfDays,
        from,
        to,
        total
    })

    
    newResAdvenAct.save().then(()=>{
        res.json("ResAdvenAct Added");
    }).catch((err)=>{
        console.log(err);
    })
})





 router.route("/").get((req,res)=>{

     ResAdvenAct.find().then((ResAdvenActs)=>{
         res.json(ResAdvenActs)
     }).catch((err)=>{
         console.log(err)
     })

 })


// router.route("/update/:id").put(async(req,res)=> {
//     let userId = req.params.id;
//     const {fname, lname, address, email, contactNo, selectedAdventure, date, noOfDays} = req.body;

//     const updatenewResAdvenAct = {
//         fname,
//         lname,
//         address,
//         email,
//         contactNo,
//         selectedAdventure,
//         date,
//         noOfDays
//     }

//     const update = await ResAdvenAct.findByIdAndUpdate(userId, updatenewResAdvenAct)
//     .then(()=>{

//         res.status(200).send({status: "User updated"})

//     }).catch((err) => {
//       console.log(err);
//       res.status(500).send({status: "Error with updating data", error: err.message});
//     })

// })

 router.route("/delete/:id").delete(async (req, res) => {
     let userId = req.params.id;

     await ResAdvenAct.findByIdAndDelete(userId)
     .then(() => {
         res.status(200).send({status: "User deleted"});
     }).catch((err) => {
         console.log(err.message);
         res.status(500).send({status: "Error with delete user", error: err.message});
     })
 })


// router.route("/get/:id").get(async (req, res) => {
//     let userId = req.params.id;
//     const user = await ResAdvenAct.findById(userId)
//     .then((newResAdvenAct) => {
//        res.json(newResAdvenAct)
//     }).catch((err) =>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with get user", reeror: err.message});
//     })
// })



module.exports = router;