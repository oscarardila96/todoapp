const { Router } = require("express");
const { getAllTasks, getTaskById, getTaskWithCategories, createTask, updateTask, deleteTask } = require("../controllers/tasks.controllers");

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.get("/:id/categories", getTaskWithCategories);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;