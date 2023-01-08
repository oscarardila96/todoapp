const db = require("../utils/database");
const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");

const users = [
  { username: "oscar", email: "oscar@aol.com", password: "root123" },
  { username: "ian", email: "ian@aol.com", password: "root123" },
  { username: "kat", email: "kat@aol.com", password: "root123" },];
const tasks = [
  { title: "Tarea 1", description: "Descripcion 1", userId: 1 },
  { title: "Estudiar", description: "Node", userId: 1 },
  { title: "Dormir", userId: 2 },
  { title: "Comer", description: "Hamburguesa", userId: 3 }

];
const categories = [];
const taskCategories = []

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando seeding")
    users.forEach(user => Users.create(user))
    setTimeout(() => {
      tasks.forEach(task => Tasks.create(task));
    }, 100);
  })
  .catch(error => console.log(error));