const ExpressError = require("./utils/ExpressError");
const Doctor = require("./models/doctor");
const Appointment = require("./models/appointment");
const Review = require("./models/review.js");
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

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("failure", "You must be logged in");
        return res.redirect("/user/login");
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor.owner.equals(res.locals.currUser._id)) {
        req.flash("failure", "You are not the owner of this Profile");
        return res.redirect(`/${id}`);
    }
    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("failure", "You are not the author of this review");
        return res.redirect(`/${id}`);
    }
    next();
};
module.exports.slotcount=async(req,res,next)=>{
    
    const {doctorid,userid}=req.params;
    if(!req.body.appointment.date || !req.body.appointment.slot){
        req.flash("failure","Invalid date");
        return res.redirect(`/${doctorid}`);
    };
  const {date, slot } = req.body.appointment;

  // Convert '18-04-2025' to ISODate start and end of the day
  const [day, month, year] = date.split('-');

  const dateStartIST = new Date(`${year}-${month}-${day}T00:00:00+05:30`);
const dateEndIST = new Date(`${year}-${month}-${day}T23:59:59+05:30`);

// Convert the IST Date to UTC
const dateStartUTC = new Date(dateStartIST.getTime() - dateStartIST.getTimezoneOffset() * 60 * 1000);
const dateEndUTC = new Date(dateEndIST.getTime() - dateEndIST.getTimezoneOffset() * 60 * 1000);



    const count = await Appointment.countDocuments({
      doctor: doctorid,
      slot: slot,
      date: { $gte: dateStartUTC, $lte: dateEndUTC }
    });
if(count<10){
    req.count=count;
    req.slot=slot;
    req.date=date;
        next();
    }
 else{
        req.flash("failure","No Slots Available,Choose another day or slot")
        return res.redirect(`/${doctorid}`);;
    }
}

