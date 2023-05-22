const router = require("express").Router();
const User = require("../models/User.js");

router.route("/add").post((req,res) =>{

    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
   

    const newUser = new User({
      fname,
      lname,
      address,
      phone,
      email,
      password,
     
    })

    newUser.save().then(()=>{
        res.json("Registred Success")
    }).catch((err)=>{
        console.log(err);
    })
  
})

router.route("/view").get((req,res) =>{

    User.find().then((User)=>{
        res.json(User)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/view/:id").get((req,res) =>{

  User.findById(req.params.id).then((User)=>{
        res.json(User)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) =>{

    let UserId = req.params.id;
    const { fname,lname,address,phone,email,password} = req.body;

        const updateUser = {
            fname,
            lname,
            address,
            phone,
            email,
            password
        }
        
        const update = await User.findByIdAndUpdate(UserId,updateUser)

        .then(() =>{
            res.status(200).send({status:"Updater User Details .....",})
        }).catch((err) =>{
            console.log(err);
            res.status(500).send({status : "Error with updating ", error: err.message});
        })
})

router.route("/delete/:id").delete(async(req,res) =>{

    let UserId = req.params.id;
    await User.findByIdAndDelete(UserId)
    .then(() =>{
        res.status(200).send({status:"User Deleted",})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status : "Error with deleting ", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let UserId = req.params.id;
    const user = await User.findById(UserId)
    .then((User)=>{
        res.json(User);
    }).catch(()=>{
        console.log(err.message); 
        res.status(500).send({status:"Error",error:err.message});
    })
})
 
module.exports = router;
