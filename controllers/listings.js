const Doctor=require("../models/doctor.js");
module.exports.index=async(req,res)=>{
    let doctors=await Doctor.find({});
    res.render("listings/index.ejs",{doctors});
}