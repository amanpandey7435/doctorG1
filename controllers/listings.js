const Doctor=require("../models/doctor.js");
const Review=require("../models/review.js")
const wrapAsync = require("../utils/wrapAsync.js");
const mongoose=require("mongoose");
const cloudinary=require("cloudinary");
module.exports.index=wrapAsync(async(req,res,next)=>{
    let doctors=await Doctor.find({});
    res.render("listings/index.ejs",{doctors});
})

module.exports.show=wrapAsync(async(req,res,next)=>{
    let {id}=req.params;
    const doctor=await Doctor.findById(id).populate({path:"review",populate:{path:"author"}}).populate({path:"owner"});
    res.render("listings/show.ejs",{doctor});
});

module.exports.new=wrapAsync(async(req,res,next)=>{
    res.render("listings/new.ejs");
})

module.exports.newPostroute=wrapAsync(async(req,res,next)=>{
    const url=await req.file.path;
    const filename=req.file.filename;
    const doctor=new Doctor(req.body.doctor);
    const specArray=req.body.doctor.specializations.split(",");
    const slotsArray=req.body.doctor.slots.split(",");
    doctor.specializations=specArray;
    doctor.slots=slotsArray;
    doctor.image=await {url,filename};
    doctor.owner=req.user._id;
    
    await doctor.save();
    req.flash("success","New Doctor Added");
    return res.redirect("/");
})

module.exports.updateListing=wrapAsync(async(req,res)=>{
    const {id}=req.params;
    let {specializations,slots,...rest}=req.body.doctor;
    let specArray=specializations.split(",");
    let slotsArray=slots.split(",");
    const doctor=await Doctor.findByIdAndUpdate(id,{...rest,specializations:specArray,slots:slotsArray},{new:true});
    await doctor.save();
    req.flash("success","Details Updated");
    return res.redirect(`/${id}`);
})

module.exports.deleteListing=wrapAsync(async(req,res,next)=>{
    let {id}=req.params;
    const doctor=await Doctor.findByIdAndDelete(id);
    req.flash("failure","Doctor's Profile Deleted");
    res.redirect("/");
})
module.exports.editlisting=wrapAsync(async(req,res,next)=>{
    let {id}=req.params;
    const doctor=await Doctor.findById(id);
    res.render("listings/edit.ejs",{doctor});
})
