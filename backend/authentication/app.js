const mongoose = require("mongoose");
const authRoutes=require("./routes/authRoute");
const express=require("express");
const app=express();
const cookieParser = require("cookie-parser");
require('dotenv').config()
const URL="mongodb://localhost:27017/Mindful_Heaven"


//loading and using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//connection to data base
const connection=mongoose.connect(process.env.DATABASE_URL || URL)

app.use(authRoutes);
app.listen(process.env.PORT);