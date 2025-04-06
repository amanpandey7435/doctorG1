const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const doctorSchema=new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    specializations: [{ type: String, required: true }],
    address:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true},
    price:{type:Number,required:true},
    image:{
        url:{type: String,
          default:
            "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034061.jpg",},
        filename:{
          type:String,
          default:""}
    },
    review:[{
      type:Schema.Types.ObjectId,
      ref:"Review"
    }],
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User"
    }
})
const Doctor=mongoose.model("Listing",doctorSchema);
module.exports=Doctor;
