import Joi from "joi";

export const userSignUpSchema =  Joi.object({
 name:Joi.string().required(),
 email:Joi.string().email().required(),
 age: Joi.string(),
 password:Joi.string().required(),
 confirmPassword: Joi.ref('password')
})
// export const companySignUpSchema =  Joi.object({
//  name:Joi.string().required(),
//  email:Joi.string().email().required(),
//  password:Joi.string().required(),
//  confirmPassword: Joi.ref('password')
// })
export const userSignInSchema =  Joi.object({
 email:Joi.string().email().required(),
 password:Joi.string().required(),
})
