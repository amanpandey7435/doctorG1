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
 
  

  module.exports.yourappointment = async (req, res) => {
    const { userid } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(userid)) {
      req.flash("error", "Invalid user ID.");
      return res.render("listings/error");  // render error page directly
    }
  
    try {
      const appointments = await Appointment.find({ user: userid }).populate("doctor");
      if (appointments.length === 0) {
        req.flash("error", "No appointments found.");
        return res.render("listings/yourappointments.ejs",{appointments});  // render error page directly
      }
      res.render("listings/yourappointments.ejs", { appointments });
    } catch (err) {
      console.error("Error fetching appointments:", err);
      req.flash("error", "Something went wrong.");
      return res.render("listings/yourappointments.ejs");  // render error page directly
    }
  };
  
  module.exports.deleteAppointments=async(req,res)=>{
    let {appointmentid}=req.params;
   const appointment=await Appointment.findByIdAndDelete(appointmentid);
    req.flash("success","Your appointment is deleted");
    res.redirect("/")
  }
module.exports.searchSlot=async(req,res)=>{
  const {doctorid,userid}=req.params;
  const count=req.count;
  const slot=req.slot;
  const date=req.date;
  res.redirect(`/appointment/${doctorid}/${userid}?count=${count}&slot=${slot}&date=${date}`);

};
module.exports.yourpatients=async(req,res)=>{
  const {userid}=req.params;
  const doctors=await Doctor.find({owner:userid});
  const heading="Select Doctors Profile";
  res.render("listings/index",{doctors,heading});
}

module.exports.viewpatients = async (req, res) => {
  const { doctorid } = req.params;
  const doctor = await Doctor.findById(doctorid);
  const appointments = await Appointment.find({ doctor: doctor._id }).sort({ date: 1 });
  const today = new Date().setHours(0, 0, 0, 0);
  return res.render("listings/yourpatients", { appointments, today });
};
