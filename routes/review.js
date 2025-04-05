const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();
const Review =require("../models/review");
const wrapAsync=require("../utils/wrapAsync.js");
const reviewController=require("../controllers/reviews.js");

router.route("/:id")
.post(reviewController.addreview);

router.route("/:id/:reviewId")
.delete(reviewController.deleteReview);

module.exports=router;