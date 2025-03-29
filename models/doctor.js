const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const doctorSchema=new Schema({
    name:{type:String,required:true},
    specializations: [{ type: String, required: true }],
    address:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true},
    price:{type:Number,required:true},
    image: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) =>
          v === ""
            ? "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            : v,
      },
})
const Doctor=mongoose.model("Listing",doctorSchema);
module.exports=Doctor;
