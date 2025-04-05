const express=require("express");
const router=express.Router();
const doctorsController=require("../controllers/listings.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {validateListing, isLoggedIn}=require("../middlewares.js");


router.route("/")
.get(doctorsController.index)
.post(doctorsController.newPostroute);

router.route("/new")
.get(isLoggedIn,doctorsController.new);

router.route("/:id")
.get(doctorsController.show)
.delete(isLoggedIn,doctorsController.deleteListing)
.put(isLoggedIn,validateListing,doctorsController.updateListing);
router.route("/:id/editListing")
.get(isLoggedIn,doctorsController.editlisting);


module.exports=router;