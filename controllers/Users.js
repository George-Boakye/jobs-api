
import { usersData } from "../data.js";


export const addUser = (req, res)=>{
    const {name, email, age, password} =  req.body;
    console.log(req.body)
    const randomId = Math.floor(Math.random()*1000);
    usersData.push({
        id: randomId,
        name,
        email,
        age,
        password,
    })
    res.status(201).send({
        message:`$account your account was created successfully`,
        data: usersData
    })
    }