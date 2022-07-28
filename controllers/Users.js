import { usersData } from "../data.js";

export const addUser = (req, res) => {
  const { name, email, age, password } = req.body;
  const randomId = Math.floor(Math.random() * 1000);
  usersData.push({
    id: randomId,
    name,
    email,
    age,
    password,
  });
  res.status(201).send({
    message: `${name} your account was created successfully`,
    data: usersData,
  });
};

export const addCompany = (req, res) => {
  const { name, email, password } = req.body;
  const randomId = Math.floor(Math.random() * 1000);
  usersData.push({
    id: randomId,
    name,
    email,
    password,
  });
  res.status(201).send({
    message: `your company, ${name} was created successfully`,
    data: usersData,
  });
};

export const getUser = (req, res) => {
  res.status(200).send({
    message: "User found successfully",
    data: req.user,
  });
};
