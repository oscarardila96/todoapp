const TaskServices = require("../services/task.service");

const getAllTasks = async (req, res) => {
  try {
    const result = await TaskServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await TaskServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TaskServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaskServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };