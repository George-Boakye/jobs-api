import { userSignUpSchema } from "./validation.js";


export const validateUser = (req, res, next) =>{
    const {error} = userSignUpSchema.validate(req.body);
    console.log(req.body)
    if(error){
        return res.status(400).send({
            error,
        });
    }
    next()
}

