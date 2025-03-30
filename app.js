
// requiring express
const express=require("express");
const app=express();
const port=8080;
// path
const path=require("path");

// requiring method-override
const methodOverride=require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



// basic setup
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));


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

// requiring ejs-mate
engine = require('ejs-mate');
app.engine('ejs', engine);


// requiring controllers
const doctorsRouter=require("./routes/listings");
// home route
app.use("/",doctorsRouter);

//requiring and express error handling
const ExpressError=require("./utils/ExpressError");
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something Went Wrong"}=err;
    console.log(err.message);
    res.status(statusCode).render("listings/error.ejs",{err});
});


