import Joi from "joi";

export const userSignUpSchema =  Joi.object({
 name:Joi.string().required(),
 email:Joi.string().email().required(),
 age: Joi.string().required(),
 password:Joi.string()
 .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
 confirmPassword: Joi.ref('password')
})