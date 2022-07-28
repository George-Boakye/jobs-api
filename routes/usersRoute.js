import { Router } from "express";
import { validateUser} from "../middleware/index.js";
import { addUser } from "../controllers/Users.js";

const router = Router();


router.post('/user/signup',validateUser,addUser )




export default router;