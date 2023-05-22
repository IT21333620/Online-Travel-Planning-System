const router = require('express').Router();
const Customers = require("../models/Customer");
const HotelOwners = require('../models/Hotel');
const DestinationManagers = require("../models/Destinationmanager");
const Advertisers = require('../models/Advertiser');
const Admin = require('../models/Admin');

const VehicleDriver = require('../models/VehicleDriver');

const User = require('../models/User');
const InsuranceCompany = require('../models/InsuranceCompany');


// Add a new customer
router.post('/cusadd', (req, res) => {
    const customers = new Customers(req.body);
    customers.save()
        .then(() => {
            res.status(200).json({ 'customer': 'Customer added successfully' });
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

// Customer login
router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userType = req.body.userType;

    let userSchema;

    // Set the user schema based on the user type
    if (userType === 'customer') {
        userSchema = User;
        
    } else if (userType === 'hotel_owner') {
        userSchema = HotelOwners;
        
    } else if (userType === 'advertiser') {
        userSchema = Advertisers;
        
    } else if (userType === 'destination_manager') {
        userSchema = DestinationManagers;
       
    } else if (userType === 'admin') {
        userSchema = Admin;
        

    } else if (userType === 'driver') {
        userSchema = VehicleDriver;

    } else if (userType === 'insurance') {
        userSchema = InsuranceCompany;
      
    }

    try {
        // Find the user in the corresponding schema
        const user = await userSchema.find({ email, password }).limit(1).exec();
        if (user.length === 0) {
            // If user not found, return error message
            return res.status(401).send({
                message: "Invalid email or password"
            });
        } else {
            return res.status(200).send({
                message: "Valid email or password",
                userId: user[0]._id
            });
        }
    } catch (err) {
        // Handle errors
        console.error(err);
        return res.status(500).send({
            message: "An error occurred"
        });
    }
});

module.exports = router;
