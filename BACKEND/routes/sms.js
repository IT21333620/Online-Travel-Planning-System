const express = require("express");
const router = express.Router();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

router.post("/", (req, res)=>{
    const msg = "Vehicle is ready for maintenance";
    const phoneNumber = req.body.phoneNumber;
    client.messages
        .create ({
            body: msg,
            from: process.env.FROM_NUMBER,
            to: phoneNumber,
        })
        .then((message) =>{
            console.log(message.status);
            res.send(message.status);
        })
});
module.exports = router;