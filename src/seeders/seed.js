const db = require("../utils/database");
const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");
const Categories = require("../models/categories.model");
const TaskCategories = require("../models/task_categories.model");

const users = [
  { username: "oscar", email: "oscar@aol.com", password: "root123" },
  { username: "ian", email: "ian@aol.com", password: "root123" },
  { username: "kat", email: "kat@aol.com", password: "root123" },];
const tasks = [
  { title: "Estudiar node", description: "Descripcion 1", userId: 1 },
  { title: "Pasear al perro", description: "Node", userId: 1 },
  { title: "lavar platos", userId: 2 },
  { title: "chequeo mensual", description: "Hamburguesa", userId: 3 }

];

const categories = [
  { name: "personal" },
  { name: "educación" },
  { name: "salud" },
  { name: "trabajo" },
  { name: "hogar" },
  { name: "cocina" },
  { name: "deporte" },
  { name: "ocio" },
  { name: "financiero" },
  { name: "otros" }
];


const taskCategories = [
  { categoryId: 1, taskId: 1 },
  { categoryId: 2, taskId: 1 },
  { categoryId: 4, taskId: 1 },
  { categoryId: 1, taskId: 2 },
  { categoryId: 3, taskId: 2 },
  { categoryId: 7, taskId: 2 },
  { categoryId: 10, taskId: 2 },
  { categoryId: 5, taskId: 3 },
  { categoryId: 6, taskId: 3 },
  { categoryId: 1, taskId: 4 },
  { categoryId: 3, taskId: 4 },
]

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando seeding")
    users.forEach(user => Users.create(user))
    setTimeout(() => {
      tasks.forEach(task => Tasks.create(task));
    }, 100);
    setTimeout(() => {
      categories.forEach(category => Categories.create(category));
    }, 200);
    setTimeout(() => {
      taskCategories.forEach(tc => TaskCategories.create(tc));
    }, 300);
  })
  .catch(error => console.log(error));