const router = require("express").Router();
let Advertiser = require("../models/Advertiser");

router.route("/add").post((req,res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const company = req.body.company;
    const email = req.body.email;
    const address = req.body.address;
    const contactWork = req.body.contactWork;
    const contactMobile = req.body.contactMobile;
    const password = req.body.password;
    const reEnteredPassword = req.body.reEnteredPassword;

    const newAdvertiser = new Advertiser({

        fname,
        lname,
        company,
        email,
        address,
        contactWork,
        contactMobile,
        password,
        reEnteredPassword
    })

    newAdvertiser.save().then(() => {
        res.json("Advertiser added")
    }).catch((error) => {
        console.log(error);
    })

})

router.route("/").get((req,res) => {

    Advertiser.find({}, { password: 0, reEnteredPassword: 0 }).then((advertisers) => {
        res.json(advertisers)
    }).catch((error => {
        console.log(error)
    }))
})

router.route("/update/:advertiserId").put(async(req,res) => {

    let advertiserId = req.params.advertiserId;
    const {fname, lname, company, email, address, contactWork, contactMobile} = req.body;

    const updateAdvertiser = {
        fname,
        lname,
        company,
        email,
        address,
        contactWork,
        contactMobile
    }

    const update = await Advertiser.findByIdAndUpdate(advertiserId,updateAdvertiser)
        .then(() => {
            res.status(200).send({status : "Advertiser updated"})
        }).catch((error) => {
            console.log(error)
            res.status(500).send({status : "Error with updating data", error : error.message});
        })
    
})

router.route("/delete/:advertiserId").delete(async(req,res) => {

    let advertiserId = req.params.advertiserId;

    await Advertiser.findByIdAndDelete(advertiserId)
        .then(() =>
        {
            res.status(200).send({status : "Advertiser deleted"})
        }).catch((error) => {
            console.log(error.message);
            res.status(500).send({status : "Error with delete advertiser", error : error.message});
        })

})

router.route("/get/:advertiserId").get(async(req,res) => {

    let advertiserId = req.params.advertiserId;

    const advertiser = await Advertiser.findById(advertiserId)
        .then((advertiser) => {
            res.json(advertiser);
        }).catch((error) => {
            console.log(error.messsage);
            res.status(500).send({status : "Error with get user", error : error.message});
        })
})

module.exports = router;