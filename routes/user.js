const express=require("express");
const passport=require("passport");
const router=express.Router();
const userController=require("../controllers/users.js");
router.route("/login")
.get(userController.userloginForm)
.post(
    passport.authenticate("local", {
      failureRedirect: "/user/login",
      failureFlash: true, 
    }),
    userController.userLogin
  );
router.route("/signup")
.get(userController.userSignup)
.post(userController.aftersignup);
router.route("/logout")
.get(userController.userlogout);
module.exports=router;