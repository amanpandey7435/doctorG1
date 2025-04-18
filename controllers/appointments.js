const mongoose = require("mongoose");
const Review=require("../models/review");
const Doctor=require("../models/doctor");
const Appointment=require("../models/appointment.js");
const moment = require('moment');

const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.bookingpage = async (req, res) => {
    const { doctorid, userid } = req.params;
const doctor = await Doctor.findById(doctorid);
const user = await User.findById(userid);
const count=req.query.count;
const slot=req.query.slot;
const date=req.query.date;

  
    res.render("listings/book", { doctor, user,count,slot,date });
  };
  
  
  module.exports.bookinpost = async (req, res) => {
    const { doctorid, userid } = req.params;

   const newAppointment=new Appointment(req.body.appointment);
    newAppointment.name=req.body.appointment.name;
    newAppointment.doctor=doctorid;
    newAppointment.user=userid;
    newAppointment.phone=req.body.appointment.phone;
    newAppointment.date = moment(req.body.appointment.date, "DD-MM-YYYY").add(5.5,"hours").toDate();
    newAppointment.slot=req.body.appointment.slot;

    await newAppointment.save();
    req.flash("success","Appointment booked");
    res.redirect(`/${doctorid}`);
};
  
module.exports.searchSlot=async(req,res)=>{
  const {doctorid,userid}=req.params;
  const count=req.count;
  const slot=req.slot;
  const date=req.date;
  res.redirect(`/appointment/${doctorid}/${userid}?count=${count}&slot=${slot}&date=${date}`);

};