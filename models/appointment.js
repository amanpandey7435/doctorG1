const { required } = require("joi");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const AppointmentSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    date:{type:Date,required:true},
    slot:{type:String},
    user:{type:Schema.Types.ObjectId,ref:"User"},
    doctor:{type:Schema.Types.ObjectId,ref:"Doctor" },
    status:{type:String}
});

module.export=mongoose.model("Appointment",AppointmentSchema);