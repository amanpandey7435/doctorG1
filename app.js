
// requiring express
const express=require("express");
const app=express();
const port=8080;
// path
const path=require("path");

// requiring method-override
const methodOverride=require("method-override");
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


// home route
app.get("/",(req,res)=>{
    res.send("Port is listening");
})