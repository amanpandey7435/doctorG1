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
  
    res.render("listings/book", { doctor, user });
  };
  
  
  module.exports.bookinpost = async (req, res) => {
    const { doctorid, userid } = req.params;
    // const { appointment } = req.body;

   const newAppointment=new Appointment(req.body.appointment);
    newAppointment.name=req.body.appointment.name;
    newAppointment.doctor=req.body.appointment.doctor;
    newAppointment.phone=req.body.appointment.phone;
    newAppointment.date = moment(req.body.appointment.date, "DD-MM-YYYY").toDate();
    newAppointment.slot=req.body.appointment.slot;

    await newAppointment.save();
    req.flash("success","Appointment booked");
    res.redirect(`/appointment/${doctorid}/${userid}`);
};
  