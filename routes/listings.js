const express=require("express");
const router=express.Router();
const doctorsController=require("../controllers/listings.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {validateListing,isLoggedIn,isOwner}=require("../middlewares.js");
const multer  = require('multer')
const {storage}=require("../cloudconfig.js");
const upload = multer({ storage });


router.route("/")
.get(doctorsController.index)
.post(upload.single('doctor[image]'),validateListing,doctorsController.newPostroute);

router.route("/new")
.get(isLoggedIn,doctorsController.new);

router.route("/:id")
.get(doctorsController.show)
.delete(isLoggedIn,isOwner,doctorsController.deleteListing)
.put(validateListing,isOwner,doctorsController.updateListing);
router.route("/:id/editListing")
.get(isLoggedIn,isOwner,doctorsController.editlisting);


module.exports=router;