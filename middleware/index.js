import {
  userSignUpSchema,
  userSignInSchema,
} from "./validation.js";
import { usersData } from "../data.js";

export const validateUser = (req, res, next) => {
  const { error } = userSignUpSchema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error,
    });
  }
  next();
};

export const validateUserSignin = (req, res, next) => {
  const { error } = userSignInSchema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error,
    });
  }
  const user = usersData.find(
    (user) => user.email == req.body.email && user.password == req.body.password
  );
  req.user = user;
  next();
};

export const checkForUser = (req, res, next) => {
  const user = usersData.find((user) => user.id == req.params.userId);
  if (!user) {
    return res.status(404).send({
      message: "User not found",
      data: null,
    });
  }
  req.user = user;
  next();
};

export const validateCompany = (req, res, next) => {
  const { error } = userSignUpSchema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error,
    });
  }
  next();
};
