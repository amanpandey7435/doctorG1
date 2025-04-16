const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();
const Review =require("../models/review");
const wrapAsync=require("../utils/wrapAsync.js");
const reviewController=require("../controllers/reviews.js");
const {isLoggedIn,isReviewAuthor}=require("../middlewares.js");
const { bookingpage, bookinpost } = require("../controllers/appointments.js");

router
  .route("/:doctorid/:userid")   // not prefixed
  .get(isLoggedIn, bookingpage)
  .post(bookinpost);
module.exports=router;