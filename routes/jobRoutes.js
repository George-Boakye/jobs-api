import { Router } from "express";
import {
  getAllJob,
  getJob,
  addJob,
  updateJob,
  deleteJob,
} from "../controllers/jobs.js";
import {
  checkForJob,
  checkForJobCategory,
  validateJob,
} from "../middleware/jobs.js";

const router = Router();

router.get("/jobs", getAllJob);
router.get("/job/:id", checkForJob, getJob);
router.get("/jobs/:category", checkForJobCategory, getJob);
router.post("/jobs", validateJob, addJob);
router.put("/job/:id", checkForJob, updateJob);
router.delete("/job/:id", checkForJob, deleteJob);

export default router;
