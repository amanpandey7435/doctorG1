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
    const doctor=await Doctor.findById(id).populate({path:"review"});
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
    doctor.specializations=specArray;
    doctor.image=await {url,filename};
    const rev=new Review();
    rev.save()
    doctor.review.push(rev);
    await doctor.save();
    return res.redirect("/");
})

module.exports.updateListing=wrapAsync(async(req,res)=>{
    const {id}=req.params;
    let {specializations,...rest}=req.body.doctor;
    let specArray=specializations.split(",");
    const doctor=await Doctor.findByIdAndUpdate(id,{...rest,specializations:specArray},{new:true});
    await doctor.save();
    return res.redirect(`/${id}`);
})

module.exports.deleteListing=wrapAsync(async(req,res,next)=>{
    let {id}=req.params;
    const doctor=await Doctor.findByIdAndDelete(id);
    res.redirect("/");
})
module.exports.editlisting=wrapAsync(async(req,res,next)=>{
    let {id}=req.params;
    const doctor=await Doctor.findById(id);
    res.render("listings/edit.ejs",{doctor});
})
