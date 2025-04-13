const Review=require("../models/review");
const Doctor=require("../models/doctor");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.bookingpage=(req,res)=>{
    const userid=req.params.id;
    const doctorid=req.params.doctorid;
    console.log(res.locals.currUser);
    res.render("listings/book.ejs")
}