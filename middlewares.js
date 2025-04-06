
const ExpressError = require("./utils/ExpressError");
const Doctor=require("./models/doctor")
const Review=require("./models/review.js")
const { doctorSchema } = require("./schema.js");

module.exports.validateListing = (req, res, next) => {
    const { error } = doctorSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg)); // Pass error to error-handling middleware
    } else {
        next();
    }
};
module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("failure","You must be logged in")
        return res.redirect("/user/login");
    }
    next();
}
module.exports.isOwner=async (req,res,next)=>{
    let {id}=req.params;
    const doctor=await Doctor.findById(id);
    if(!doctor.owner.equals(res.locals.currUser._id)){
        req.flash("failure","You are not the owner of this Profile");
        return res.redirect(`/${id}`);
    }
    next()
}
module.exports.isReviewAuthor=async (req,res,next)=>{
    let {id,reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("failure","You are not the author of this review");
        return res.redirect(`/${id}`);
    }
        
    next()
}