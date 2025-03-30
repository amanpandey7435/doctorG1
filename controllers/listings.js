const Doctor=require("../models/doctor.js");
const wrapAsync = require("../utils/wrapAsync.js");
module.exports.index=wrapAsync(async(req,res,next)=>{
    let doctors=await Doctor.find({});
    res.render("listings/index.ejs",{doctors});
})

module.exports.show=wrapAsync(async(req,res,next)=>{
    let {id}=req.params;
    const doctor=await Doctor.findOne({_id:id});
    await res.render("listings/show.ejs",{doctor});
});
module.exports.deleteListing=wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const doctor=await Doctor.findByIdAndDelete(id);
    res.redirect("/");
})
module.exports.editlisting=wrapAsync(async(req,res)=>{

    res.render("listings/edit.ejs");
})