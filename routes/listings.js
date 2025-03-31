const express=require("express");
const router=express.Router();
const doctorsController=require("../controllers/listings.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {validateListing}=require("../middlewares.js");


router.route("/")
.get(doctorsController.index)
.post(doctorsController.newPostroute);

router.route("/new")
.get(doctorsController.new);

router.route("/:id")
.get(doctorsController.show)
.delete(doctorsController.deleteListing)
.put(validateListing,doctorsController.updateListing);
router.route("/:id/editListing")
.get(doctorsController.editlisting);


module.exports=router;