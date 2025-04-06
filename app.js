if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
    };
// requiring express
const express=require("express");
const app=express();
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const port=8080;
// path
const path=require("path");
const flash=require("connect-flash")
// requiring method-override
const methodOverride=require("method-override");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// requiring user from model
const User=require("./models/user.js");

// basic setup
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));

// requiring ejs-mate
engine = require('ejs-mate');
app.engine('ejs', engine);


// session-options
const sessionOptions = {
    secret: "amanpandey",
    resave: false,
    saveUninitialized: true, 
    cookie: {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), 
        httpOnly: true // Fixed case
    },
};
app.use(session(sessionOptions));
app.use(flash());
// passport setup code
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.currUser=req.user;
    next();
  });
  app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.failure=req.flash('failure');
    next();
  })

// listening route
app.listen(port,()=>{
    console.log("Port is listening to 8080");
})

// mongoose setup
const mongoose=require("mongoose");
main().then(res=>console.log("Connected SUccessfully")).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/doctorg1');
}



// requiring controllers
const doctorsRouter=require("./routes/listings");

const userRouter = require("./routes/user.js");
const reviewsRouter = require("./routes/review");

// home route
app.use("/", doctorsRouter);
app.use("/user", userRouter);
app.use("/reviews", reviewsRouter);


//requiring and express error handling
const ExpressError=require("./utils/ExpressError");
const { Cookie } = require("express-session");
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something Went Wrong"}=err;
    console.log(err);
    res.status(statusCode).render("listings/error.ejs",{err});
});


  
