const { Sequelize } = require("sequelize");

const config = {
  name: "testDB",
  username: "root",
  password: "Password!@#$",
  dialect: "mysql",
  host: "localhost",
};

const sequelize = new Sequelize(config.name, config.username, config.password, {
  dialect: config.dialect,
  host: config.host,
});

module.exports = sequelize;
