const express = require("express")
const passport = require("passport")
const passportGoogle = require("passport-google-oauth20");
const axios = require("axios");
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const mongoose = require("mongoose");
const session = require('express-session');
const customerServiceroutes = require("./routes/customerServiceRequests")
dotenv.config();

const app = express();

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
    );
    
    // Initialize Passport and configure session persistence
    app.use(passport.initialize());
    app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', authRoutes);
app.use("/customer-service",customerServiceroutes)

mongoose.connect('mongodb://localhost/InterCom').then(console.log("connected to DB"))
.catch(err => console.log(err));



app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at port ${process.env.PORT}`);
})