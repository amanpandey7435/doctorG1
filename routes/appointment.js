const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();
const Review =require("../models/review");
const wrapAsync=require("../utils/wrapAsync.js");
const reviewController=require("../controllers/reviews.js");
const {isLoggedIn,isReviewAuthor,slotcount}=require("../middlewares.js");
// const { bookingpage, bookinpost,searchSlot, yourappointment, deleteAppointments, yourpatients, viewpatients } = require("../controllers/appointments.js");
const appointmentController= require("../controllers/appointments.js");
router.route("/:appointmentid")
.delete(isLoggedIn,appointmentController.deleteAppointments);
router.route("/search/:doctorid/:userid")
.post(isLoggedIn,slotcount,appointmentController.searchSlot);
router.route("/:userid")
.get(isLoggedIn,appointmentController.yourappointment);
router.route("/seepatients/:userid")
.get(isLoggedIn,appointmentController.yourpatients);
router.route("/viewpatients/:doctorid")
.get(isLoggedIn,appointmentController.viewpatients);
router
  .route("/:doctorid/:userid")   // not prefixed
  .get(isLoggedIn, appointmentController.bookingpage)
  .post(isLoggedIn,appointmentController.bookinpost);
module.exports=router;