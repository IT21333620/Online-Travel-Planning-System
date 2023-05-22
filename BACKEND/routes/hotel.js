 const router = require("express").Router();
const { request } = require("express");
const Hotel = require("../models/Hotel");
const HotelRoom = require("../models/HotelRoom")
const checkIn = require("../models/CheckIn");
const PendingRoom = require("../models/PendingRooms");

router.route("/add").post((req,res) =>{

    const{firstName, lastName, hotelName,description,checkingIn,checkOut,minAge,pets,policy,googleMap, address,phoneNo,email , password, refund, price,wifi,pool,laundry,park,ac,frontDesk,restaurant,bar,spa} = req.body;
    const Image1 = req.body.Image1;
    const Image2 = req.body.Image2;
    const Image3 = req.body.Image3;
    const Image4 = req.body.Image4;
    const Image5 = req.body.Image5;
    const Image6 = req.body.Image6;

    const newHotel = new Hotel({
        firstName,
        lastName, 
        hotelName, 
        description,
        checkingIn,
        checkOut,
        minAge,
        pets,
        policy,
        googleMap,
        address,
        phoneNo ,
        email, 
        password, 
        refund, 
        price,
        wifi,
        pool,
        laundry,
        park,
        ac,
        frontDesk,
        restaurant,
        bar,
        spa,
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6
    })

    newHotel.save().then(()=>{
        res.json("New Hotel Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/view").get((req,res) =>{

    Hotel.find().then((hotel)=>{
        res.json(hotel)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/viewhotelHome").get((req, res) => {
    Hotel.find({}, {
        _id: 1,
        Image1: 1,
        hotelName: 1,
        refund: 1,
        address: 1,
        wifi: 1,
        pool: 1,
        price: 1
    }).then((hotels) => {
        res.json(hotels);
    }).catch((err) => {
        console.log(err);
    });
});



router.route("/view/:hotelId").get(async(req,res) =>{

    let hotelId = req.params.hotelId;
    const hotelL = await Hotel.findById(hotelId)
        .then((hotelL) =>{
            res.json(hotelL);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get hotel ", error: err.message});
        })
})

router.route("/addroom/:hotelId").post((req,res) =>{

    let hotelId = req.params.hotelId;
    const name = req.body.name;
    const numberofRooms = Number(req.body.numberofRooms);
    const bookedRooms = Number(req.body.bookedRooms);
    const wheelchair = req.body.wheelchair;
    const refundable = req.body.refundable;
    const typeOfBeds = req.body.typeOfBeds;
    const noOfBeds = Number(req.body.noOfBeds);
    const sleepers = Number(req.body.sleepers);
    const view = req.body.view;
    const area = Number(req.body.area);
    const price = Number(req.body.price);
    const image = req.body.image;

    const newRoom = new HotelRoom({
 
        name,
        numberofRooms,
        bookedRooms,
        wheelchair,
        refundable,
        typeOfBeds,
        noOfBeds,
        sleepers,
        view,
        area,
        price,
        image,
        hotelId
    })

    newRoom.save().then(()=>{
        res.json("New Room Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/viewRoomDetails/:RoomId").get(async(req,res) =>{

    let roomId = req.params.RoomId;
    const room = await HotelRoom.findById(roomId)
        .then((room) =>{
            res.json(room);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get Room ", error: err.message});
        })
})

router.route("/getroomname/:RoomId").get(async (req, res) => {
    let roomId = req.params.RoomId;
    const room = await HotelRoom.findById(roomId)
        .select('name _id')
        .then((room) => {
            res.json(room);
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status : "Error with get Room ", error: err.message});
        });
});




router.route("/viewRoom/:hotelId").get(async(req,res) =>{

    const room = await HotelRoom.find({hotelId: req.params.hotelId})
        .then((room) =>{
            res.json(room);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get hotel ", error: err.message});
        })
})


router.route("/checkIn/:roomid").post((req,res)=>{
    const{from, to, userId,firstName, lastName, phoneNo, email,noOfGuest,total,hotelId} = req.body;
    let roomId = req.params.roomid;
    const newcheckIn = new checkIn({
        roomId,
        hotelId,
        userId,
        from,
        to,
        firstName,
        lastName,
        phoneNo,
        email,
        noOfGuest,
        total
    })

    newcheckIn.save().then(()=>{
        res.json("Check in added");
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/viewCheckIn").get((req,res) =>{

    checkIn.find().then((CheckIn)=>{
        res.json(CheckIn)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/viewCheckIn/:hotelId").get(async(req,res) =>{

    const CheckIn = await checkIn.find({hotelId: req.params.hotelId})
        .then((CheckIn) =>{
            res.json(CheckIn);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get hotel ", error: err.message});
        })
})

router.route("/deleteCheckIn/:checkinid").delete(async (req ,res)=>{
    let id = req.params.checkinid;

    await checkIn.findByIdAndDelete(id)
        .then(()=> {
            res.status(200).send({status : "CheckIn Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete CheckIn", error: err.message});
    })
})

router.route("/updatehotel/:hotelId").put(async(req,res) =>{
    let id = req.params.hotelId;
    const {hotelName, checkingIn,checkOut, minAge, phoneNo,description,googleMap} =req.body;

    const updatehotel = {
        hotelName,
        checkingIn,
        checkOut, 
        minAge,
        phoneNo,
        description,
        googleMap
    }

    const update = await Hotel.findByIdAndUpdate(id,updatehotel).then(()=>{
        res.status(200).send({status: "Hotel updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with update data",error: err.message});
    })
})

router.route("/updatebookedRoom/:hotelId").put(async(req,res) =>{
    let id = req.params.hotelId;
    const {bookedRooms} =req.body;

    const updatebooked = {
        bookedRooms
    }

    const update = await HotelRoom.findByIdAndUpdate(id,updatebooked).then(()=>{
        res.status(200).send({status: "Booked Rooms updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with update data",error: err.message});
    })
})

router.route("/pendingroom/:hotelId").post((req,res) =>{

    let hotelId = req.params.hotelId;
    const name = req.body.name;
    const numberofRooms = Number(req.body.numberofRooms);
    const wheelchair = req.body.wheelchair;
    const refundable = req.body.refundable;
    const typeOfBeds = req.body.typeOfBeds;
    const noOfBeds = Number(req.body.noOfBeds);
    const sleepers = Number(req.body.sleepers);
    const view = req.body.view;
    const area = Number(req.body.area);
    const price = Number(req.body.price);
    const image = req.body.image;

    const newPendingRoom = new PendingRoom({
 
        name,
        numberofRooms,
        wheelchair,
        refundable,
        typeOfBeds,
        noOfBeds,
        sleepers,
        view,
        area,
        price,
        image,
        hotelId
    })

    newPendingRoom.save().then(()=>{
        res.json("New Room Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/viewPendingRoom").get((req,res) =>{

    PendingRoom.find().then((pendingroom)=>{
        res.json(pendingroom)
    }).catch((err) =>{
        console.log(err)
    })
})


router.route("/viewpendingRoom/:Id").get(async(req,res) =>{

    let Id = req.params.Id;
    const room = await PendingRoom.findById(Id)
        .then((room) =>{
            res.json(room);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get hotel ", error: err.message});
        })
})

router.route("/deletependingRoom/:id/").delete(async (req ,res)=>{
    let id = req.params.id;

    await PendingRoom.findByIdAndDelete(id)
        .then(()=> {
            res.status(200).send({status : "Room Removed"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with Delete Room", error: err.message});
    })
})

router.route("/bookedRooms/:id").get(async (req,res) =>{
    let id = req.params.id

    const booked = await checkIn.find({userId: id})
        .then((booked) =>{
            res.json(booked);
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status : "Error with get User ", error: err.message});
        })

})

router.route("/gethotel").get((req, res) => {

    Hotel.find({},{
        hotelName: 1,
        
    }).then((hotels) => {
        res.json(hotels);
    }).catch((err) => {
        console.log(err);
    });
})

router.route("/cancel/:id").put(async(req,res) =>{
    let id = req.params.id;
    const {cancel} =req.body;

    const cancelbokking = {
        cancel
    }

    const update = await checkIn.findByIdAndUpdate(id,cancelbokking).then(()=>{
        res.status(200).send({status: "Wait the hotel to approve the cancel"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Canceling",error: err.message});
    })
})


module.exports = router;