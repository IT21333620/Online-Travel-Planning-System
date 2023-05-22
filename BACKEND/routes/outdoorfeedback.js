const router = require("express").Router();
const { request } = require("express");
let OutdoorFeedback = require("../models/OutdoorFeedback");





router.route("/add").post((req,res) =>{

    const feedback = req.body.feedback;


    const newOutdoorFeedback = new OutdoorFeedback({

        feedback
    })

    
    newOutdoorFeedback.save().then(()=>{
        res.json("OutdoorFeedback Added");
    }).catch((err)=>{
        console.log(err);
    })
})





 router.route("/").get((req,res)=>{

        OutdoorFeedback.find().then((OutdoorFeedbacks)=>{
        res.json(OutdoorFeedbacks)
        }).catch((err)=>{
         console.log(err)
         })

 })


// router.route("/update/:id").put(async(req,res)=> {
//     let userId = req.params.id;
//     const {fname, lname, address, email, contactNo, selectedAdventure, date, noOfDays} = req.body;

//     const updatenewOutdoorFeedback = {
//         feedback
//     }

//     const update = await OutdoorFeedback.findByIdAndUpdate(userId, updatenewOutdoorFeedback)
//     .then(()=>{

//         res.status(200).send({status: "User updated"})

//     }).catch((err) => {
//       console.log(err);
//       res.status(500).send({status: "Error with updating data", error: err.message});
//     })

// })

 router.route("/delete/:id").delete(async (req, res) => {
     let userId = req.params.id;

     await OutdoorFeedback.findByIdAndDelete(userId)
     .then(() => {
         res.status(200).send({status: "User deleted"});
     }).catch((err) => {
         console.log(err.message);
         res.status(500).send({status: "Error with delete user", error: err.message});
     })
 })


// router.route("/get/:id").get(async (req, res) => {
//     let userId = req.params.id;
//     const user = await OutdoorFeedback.findById(userId)
//     .then((newOutdoorFeedback) => {
//        res.json(newOutdoorFeedback)
//     }).catch((err) =>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with get user", reeror: err.message});
//     })
// })



module.exports = router;