import { Router } from "express";
import {
  validateUser,
  checkForUser,
  validateUserSignin,
  validateCompany
} from "../middleware/users.js";
import { addUser, getUser, addCompany } from "../controllers/users.js";

const router = Router();

router.post("/users/signup", validateUser, addUser);
router.post("/users/auth/signin", validateUserSignin, getUser);
router.get("/user/:userId", checkForUser, getUser);
router.post("/company/signup", validateCompany, addCompany);

export default router;
