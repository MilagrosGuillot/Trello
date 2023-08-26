require("dotenv").config();
const {Sequelize} = require("sequelize");
const fs = require("fs");
const path = require("path")
const BoardModel = require("./models/Board");
const UserModel = require("./models/User")
const { DB_USER, DB_PASSWORD, DB_HOST,DB_PORT,DB_NAME} = process.env



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });

  UserModel(sequelize);
  BoardModel(sequelize);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Board } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.belongsToMany(Board, {through:"userBoard"})
Board.belongsToMany(User, {through:"userBoard"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};



