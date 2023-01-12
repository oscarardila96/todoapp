const { Router } = require("express");
const { getAllUsers, getUserById, getUserWithTasks, getUserWithCategories, createUser, updateUser, deleteUser } = require("../controllers/users.controller");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
//Obtener usuario con sus tareas
router.get("/:id/tasks", getUserWithTasks);
router.get("/:id/categories", getUserWithCategories);


router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;