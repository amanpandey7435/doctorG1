const User=require("../models/user.js");

module.exports.userSignup=((req,res)=>{
   
    res.render("users/signup.ejs");
})
module.exports.aftersignup=(async(req,res,next)=>{
    try{
        let {username,email,password}=req.body;
        let newUser=new User({email,username});
        const registeredUser=await User.register(newUser,password);
        res.redirect("/");

    }
    catch(err){
        next(err);
    }
})
module.exports.userLogin=(async(req,res,next)=>{
    try{
        res.redirect("/");
    }
    catch(err){
        res.rediect("/user/signup");
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