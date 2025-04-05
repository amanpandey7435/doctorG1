const Review=require("../models/review");
const Doctor=require("../models/doctor");
const wrapAsync = require("../utils/wrapAsync.js");


module.exports.addreview=wrapAsync(async(req,res,next)=>{
    const {id}=req.params;
    const doctor=await Doctor.findById(id);
    const reviewdata=new Review(req.body.review);
    await reviewdata.save();
    await doctor.review.push(reviewdata);
    await doctor.save();
    return res.redirect(`/${id}`);
});

module.exports.deleteReview=async(req,res,next)=>{
    let {id,reviewId}=req.params;
   await Doctor.findByIdAndUpdate(id,{$pull:{review:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    return res.redirect(`/${id}`);
};