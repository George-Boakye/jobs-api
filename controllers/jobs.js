import { jobData } from "../data.js";

export const getAllJob = (req, res) => {
  res.status(200).send({
    message: "Jobs fetched successfully",
    data: jobData,
  });
};

export const getJob = (req, res) => {
  res.status(200).send({
    message: "Job found successfully",
    data: req.job,
  });
};

export const addJob = (req, res) => {
  const { name, description, category, company } = req.body;
  const randomId = Math.floor(Math.random() * 1000);
  jobData.push({
    id: randomId,
    name,
    description,
    category,
    company,
  });
  res.status(201).send({
    message: `job was created successfully`,
    data: jobData,
  });
};

export const updateJob = (req, res) => {
  const { job } = req;
  const data = req.body;

  if (data.name) {
    job.name = data.name;
  }
  if (data.description) {
    job.description = data.description;
  }
  if (data.company) {
    job.company = data.company;
  }
  if (data.category) {
    job.category = data.category;
  }

  res.status(200).send({
    message: "job updated successfully",
    data: job,
  });
};

export const deleteJob = (req, res) => {
  let newList = jobData.filter((job) => job.id !== req.job.id);
  res.status(200).send({
    message: "job deleted successfully",
    data: newList,
  });
};
