const { Router } = require("express");
const { getAllTasks, getTaskById, getTaskWithCategories, createTask, updateTask, deleteTask } = require("../controllers/tasks.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", authMiddleware, getAllTasks);
router.get("/:id", authMiddleware, getTaskById);
router.get("/:id/categories", authMiddleware, getTaskWithCategories);

router.post("/", authMiddleware, createTask);

router.put("/:id", authMiddleware, updateTask);

router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;