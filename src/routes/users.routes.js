const { Router } = require("express");
const { getAllUsers, getUserById, getUserWithTasks, getUserWithCategories, createUser, updateUser, deleteUser } = require("../controllers/users.controller");

const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
//Obtener usuario con sus tareas
router.get("/:id/tasks", authMiddleware, getUserWithTasks);
router.get("/:id/categories", authMiddleware, getUserWithCategories);


router.post("/", createUser);

router.put("/:id", authMiddleware, updateUser);

router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;