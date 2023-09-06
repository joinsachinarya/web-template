const { Sequelize } = require("sequelize");

const dbConfig = {
  dbname: "demo",
  username: "root",
  password: "Password!@#$",
};

const sequelize = new Sequelize(
  dbConfig.dbname,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
