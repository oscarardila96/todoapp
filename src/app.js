//Importar express y la base de datos
const express = require("express")
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");

//Crear instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;

//Probando la conexión a la base de datos

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch(error => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch(error => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" })
});

//Definir las rutas de los endpoints (de ahora en adelante EP)
//Consultas de usuarios = localhost:8000/users
//Consultas de tareas = localhost:8000/tasks

//Obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    //obtener el resultado de consultar a todos los usuarios de la base de datos
    const result = await Users.findAll();
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
});

//Obtener por ID (Primary ID)
app.get("/users/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const result = await Users.findByPk(id)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

//Obtener por username
app.get("/users/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
});

//Crear un usuario
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

//Actualizar usuario
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Users.update(field, { where: { id } });
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

//Eliminar un usuario
app.delete("/users/:id"), async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({ where: { id } })
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
}

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
