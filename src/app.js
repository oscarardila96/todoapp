//Importar express y la base de datos
const express = require("express")
const db = require("./utils/database");
const initModels = require("./models/init.model");
const userRoutes = require("./routes/users.routes");
const taskRoutes = require("./routes/tasks.routes");
const categoryRoutes = require("./routes/categories.routes");
const authRoutes = require("./routes/auth.routes");
const cors = require("cors");
require("dotenv").config();

//Crear instancia de express
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

//Probando la conexión a la base de datos

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch(error => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch(error => console.log(error));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido al servidor" })
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
