const express=require("express");
const router=express.Router();
const doctorsController=require("../controllers/listings.js");
router.route("/")
.get(doctorsController.index);
module.exports=router;