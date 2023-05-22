const router = require("express").Router();
const Payment = require("../models/Payment");

router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const phone = req.body.phone;
    const Card = req.body.Card;
    const address = req.body.address;
    const email = req.body.email;
    const  civ = req.body.civ;
   

    const newPayment = new Payment({
      name,
      phone,
      Card,
      address,
      email,
      civ,
     
    })

    newPayment.save().then(()=>{
        res.json("Added payment")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    Payment.find().then((payment)=>{
        res.json(payment)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/view/:id").get((req,res) =>{

  Payment.findById(req.params.id).then((payment)=>{
        res.json(payment)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) =>{

    let paymentId = req.params.id;
    const { name,phone,Card,address,email,civ,} = req.body;

        const updatePayment = {
            name,
            phone , 
            Card, 
            address,
            email , 
            civ, 
        }
        
        const update = await Payment.findByIdAndUpdate(paymentId,updatePayment)

        .then(() =>{
            res.status(200).send({status:"Payment Update",})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({status : "Error with updating ", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req,res) =>{

    let paymentId = req.params.id;
    await Payment.findByIdAndDelete(paymentId)
    .then(() =>{
        res.status(200).send({status:"Payment Deleted",})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with deleting ", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let paymentId = req.params.id;
    const user = await Payment.findById(paymentId)
    .then((payment)=>{
        res.json(payment);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
 
module.exports = router;
