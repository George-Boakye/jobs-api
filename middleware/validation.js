import Joi from "joi";

export const userSignUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number(),
  phoneNumber: Joi.string(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});
// export const companySignUpSchema =  Joi.object({
//  name:Joi.string().required(),
//  email:Joi.string().email().required(),
//  password:Joi.string().required(),
//  confirmPassword: Joi.ref('password')
// })
export const userSignInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const jobSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.array().items(Joi.string()).required(),
  company: Joi.string().required(),
  location: Joi.string().required(),
});
