const { DataTypes } = require("sequelize");

const db = require("./db");

const Student = db.define("student", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  rollNo: DataTypes.INTEGER,
  fatherName: DataTypes.STRING,
});

module.exports = Student;
