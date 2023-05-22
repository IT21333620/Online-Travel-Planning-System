const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const ImageModel = require("./models/Vehicle");
const session = require("express-session");
const MongoStore = require("connect-mongo");


require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const URL = process.env.MONGODB_URL;

const store = MongoStore.create({
    mongoUrl: process.env.MONGODB_URL,
  });
  
  app.use(
    session({
      secret: "your-secret-key",
      resave: true,
      saveUninitialized: true,
      store: store,
    })
  );

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 })

const connect = mongoose.connection;
mongoose.connection.once("open", () =>{
    console.log("MongoDB connection success!");
})

//Outdoor
const resadvenactRouter = require("./routes/resadvenact.js");
app.use("/resadvenact",resadvenactRouter);

const OutdoorActRouter = require("./routes/outdooracts.js");
app.use("/outdooract",OutdoorActRouter);

const OutdoorFeedbackRouter = require("./routes/outdoorfeedback.js");
app.use("/outdoorfeedback",OutdoorFeedbackRouter);

const VehicleSms = require("./routes/sms.js");
app.use("/vehicleSmsService",VehicleSms);

const Hotel = require("./routes/hotel.js");
app.use("/hotel",Hotel);

const insuranceRouter = require("./routes/insurance.js");
app.use("/insurance",insuranceRouter);

//Insurance Claim
const insuranceClaimRouter = require("./routes/insuranceClaim.js");
app.use("/insuranceClaim",insuranceClaimRouter)

//Insurance Company
const insuranceCompanyRouter = require("./routes/insuranceCompany.js");
app.use("/insuranceCompany",insuranceCompanyRouter)

//Insurance Plan Apply
const insuranceApply = require("./routes/insuranceApply.js");
app.use("/insuranceApply",insuranceApply)

//Insurance Feedback
const insuranceFeedbackRouter = require("./routes/insuranceFeedback.js");
app.use("/insuranceFeedback",insuranceFeedbackRouter)

const vehicleRouter = require("./routes/vehicles.js");
app.use("/vehicle", vehicleRouter);

const vehicleReserveRouter = require("./routes/vehicleReserve.js");
app.use("/vehicleReserve", vehicleReserveRouter);

const vehicleDriverRouter = require("./routes/vehicleDriver.js");
app.use("/vehicleDriver", vehicleDriverRouter);

const destinationmanagerRouter = require("./routes/destinationmanagers.js");
app.use("/destinationmanager",destinationmanagerRouter);

const destinationReserveRouter = require("./routes/destinationReserves.js");
app.use("/destinationReserve",destinationReserveRouter);

const destinationCreateRouter = require("./routes/destinationCreates.js");
app.use("/destinationCreate",destinationCreateRouter);

const advertiserRouter = require("./routes/advertisers.js");
app.use("/advertiser",advertiserRouter);

const advertisementRouter = require("./routes/advertisements.js");
app.use("/advertisement", advertisementRouter);

const customer = require('./routes/customer.js');
app.use('/customer', customer);

const paymentRouter = require("./routes/payment.js");
app.use("/payment",paymentRouter);

const UserRouter = require("./routes/user.js");
app.use("/User",UserRouter);


app.listen(PORT, () =>{
    console.log(`Server is up and running on port : ${PORT}`);
})

