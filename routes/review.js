const mongoose=require("mongoose");
const express=require("express");
const router=express.Router();
const Review =require("../models/review");
const wrapAsync=require("../utils/wrapAsync.js");
const reviewController=require("../controllers/reviews.js");
const {isLoggedIn,isReviewAuthor}=require("../middlewares.js")
router.route("/:id")
.post(isLoggedIn,reviewController.addreview);

router.route("/:id/:reviewId")
.delete(isLoggedIn,isReviewAuthor,reviewController.deleteReview);

module.exports=router;