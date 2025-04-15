const Joi=require("joi");
module.exports.doctorSchema=Joi.object({
    doctor:Joi.object({
        name:Joi.string().required(),
        description:Joi.string().required(),
        address:Joi.string().required(),
        price:Joi.number().required().min(1),
        phone:Joi.number().required(),
        image:Joi.string().allow("",null),
        email:Joi.string().required(),
        specializations:Joi.string().required(),
        slots:Joi.string().required()
    }).required()
});