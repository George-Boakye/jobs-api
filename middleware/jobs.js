import { jobData } from "../data.js";
import { jobSchema } from "./validation.js";

export const checkForJob = (req, res, next) => {
  const job = jobData.find((job) => job.id == req.params.id);
  if (!job) {
    return res.status(404).send({
      message: "job not found",
      data: null,
    });
  }
  req.job = job;
  next();
};

export const checkForJobCategory = (req, res, next) => {
  const jobs = jobData.filter((job) =>
    job.category.includes(req.params.category)
  );
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
