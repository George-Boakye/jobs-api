import { jobSchema } from "./validation.js";
import Jobs from "../models/Jobs.js";

export const checkForJob = async (req, res, next) => {
  console.log(req.params.id)
  const job = await Jobs.findOne({_id: req.params.id});
  console.log()
  if (!job) {
    return res.status(404).send({
      message: "job not found",
      data: null,
    });
  }
  req.job = job;
  next();
};

export const checkForJobCategory = async (req, res, next) => {
  const jobs = await Jobs.find({ category: { $in: [req.params.category] } });
  if (!jobs) {
    return res.status(404).send({
      message: "job not found",
      data: null,
    });
  }
  req.job = jobs;
  next();
};

export const validateJob = (req, res, next) => {
  const { error } = jobSchema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error,
    });
  }
  next();
};
