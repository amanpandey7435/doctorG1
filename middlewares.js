
const ExpressError = require("./utils/ExpressError");
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
        return res.redirect("/user/login");
    }
    next();
}