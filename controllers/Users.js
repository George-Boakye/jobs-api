import Users from "../models/Users.js";

export const addUser = async (req, res) => {
  const { name, email,phoneNumber, age, password } = req.body;
  const user  = await Users.create({
    name,
    email,
    age,
    phoneNumber,
    password,
  });
  return res.status(201).send({
    message: `${name} your account was created successfully`,
    data: user,
  });
};

export const addCompany = async (req, res) => {
  const { name, email, password } = req.body;
 const company = await Users.create({
    name,
    email,
    password,
  });
  res.status(201).send({
    message: `your company, ${name} was created successfully`,
    data: company,
  });
};

export const getUser = (req, res) => {
  res.status(200).send({
    message: "User found successfully",
    data: req.user,
  });
};
