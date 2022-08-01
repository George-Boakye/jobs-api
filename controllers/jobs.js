import Jobs from "../models/Jobs.js";

export const getAllJob = async (req, res) => {
  const jobs =  await Jobs.find()
  res.status(200).send({
    message: "Jobs fetched successfully",
    data: jobs,
  });
};

export const getJob = (req, res) => {
  res.status(200).send({
    message: "Job found successfully",
    data: req.job,
  });
};

export const addJob = async (req, res) => {
  const { name, description, category, company, location } = req.body;
  const job = await Jobs.create({
    name,
    description,
    category,
    company,
    location
  });
  res.status(201).send({
    message: `job created successfully`,
    data: job,
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
