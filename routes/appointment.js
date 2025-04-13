const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();
const Review =require("../models/review");
const wrapAsync=require("../utils/wrapAsync.js");
const reviewController=require("../controllers/reviews.js");
const {isLoggedIn,isReviewAuthor}=require("../middlewares.js");
const { bookingpage } = require("../controllers/appointments.js");

router.route("/:id/:doctorid")
.get(isLoggedIn,bookingpage);
module.exports=router;