const User=require("../models/user.js");

module.exports.userSignup=((req,res)=>{
   
    res.render("users/signup.ejs");
})
module.exports.aftersignup=(async(req,res,next)=>{
    try{
        let {username,email,password}=req.body;
        let newUser=new User({email,username});
        const registeredUser=await User.register(newUser,password);
        req.flash("success","Welcome User")
        res.redirect("/");

    }
    catch(err){
        next(err);
    }
})
module.exports.userLogin=(async(req,res,next)=>{
    try{
        req.flash("success","Logged In");
        res.redirect("/");
    }
    catch(err){
        res.redirect("/user/signup");
    }
})
module.exports.userloginForm=((req,res)=>{
    
    res.render("users/login.ejs");
})
module.exports.userlogout=("/user/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        res.redirect("/user/login");
    })
})