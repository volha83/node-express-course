const Task = require("../models/Task");
//getAll
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};
//create
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
//get
const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findById(taskID);
  if (!task) {
    return res.status(404).json({ msg: `no task with id: ${taskID}` });
  }
  res.status(200).json({ task });
};
//update
const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `no task with id: ${taskID}` });
  }
  res.status(200).json({ task });
};
//delete
const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete(taskID);
  if (!task) {
    return res.status(404).json({ msg: `no task with id: ${taskID}` });
  }
  res.status(200).json("task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
