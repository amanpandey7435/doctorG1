const Review=require("../models/review");
const Doctor=require("../models/doctor");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.bookingpage=async(req,res)=>{
    const userid=req.params.userid;
    const doctorid=req.params.doctorid;
    const doctor=await Doctor.findById(doctorid);

    

    res.render("listings/book.ejs",{doctor});
}