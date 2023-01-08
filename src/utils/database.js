//Importar Sequelize
const { Sequelize } = require("sequelize");

//Crear una instancia con parámentros de configuración de nuestra base de datos
//Se necesita un objeto de configuración -> Credenciales de la base de datos

const db = new Sequelize({
  database: "todoapp",
  username: "postgres", //Depende de cada caso
  host: "localhost", // 127.0.0.1
  port: "5432",
  password: "root",
  dialect: "postgres" //La base de datos que se está usando
});

module.exports = db;