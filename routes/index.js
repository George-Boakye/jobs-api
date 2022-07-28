import usersRoute from "./usersRoute.js"
import jobRoutes from "./jobRoutes.js"
import { Router } from "express";

const router = Router();

router.use('/api',usersRoute);
router.use('/api',jobRoutes)


export default router;