import usersRoute from "./usersRoute.js"
import { Router } from "express";


const router = Router();

router.use('/api',usersRoute)


export default router;