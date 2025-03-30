const express=require("express");
const router=express.Router();
const doctorsController=require("../controllers/listings.js");
const wrapAsync=require("../utils/wrapAsync.js");


router.route("/")
.get(doctorsController.index);

router.route("/:id")
.get(doctorsController.show);


module.exports=router;