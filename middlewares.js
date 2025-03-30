const ExpressError=require("./utils/ExpressError");
const {doctorSchema}=require("./schema.js")

module.exports.validateListing=(req,res,next)=>{
    const {error}= doctorSchema.validate(req.body);
       if(error){
        throw new ExpressError(400,error);
    }else{
        next();
    }      
};