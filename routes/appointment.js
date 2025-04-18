const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();
const Review =require("../models/review");
const wrapAsync=require("../utils/wrapAsync.js");
const reviewController=require("../controllers/reviews.js");
const {isLoggedIn,isReviewAuthor,slotcount}=require("../middlewares.js");
const { bookingpage, bookinpost,searchSlot, yourappointment, deleteAppointments } = require("../controllers/appointments.js");
router.route("/:appointmentid")
.delete(deleteAppointments);
router.route("/search/:doctorid/:userid")
.post(slotcount,searchSlot);
router.route("/:userid")
.get(yourappointment);
router
  .route("/:doctorid/:userid")   // not prefixed
  .get(isLoggedIn, bookingpage)
  .post(bookinpost);
module.exports=router;