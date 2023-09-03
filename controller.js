const User = require("./model");

exports.addData = (req, res, next) => {
  const body = {
    name: req.body.name,
    age: req.body.age,
  };
  console.log(req.body);
  User.create(body)
    .then((result) => {
      console.log("Created", result);
      res.json(result);
    })
    .catch((err) => {
      console.error();
      res.json(new Error("An error occured"));
    });
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((result) => {
      console.log("Users fetched", result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(new Error("An error occured"));
    });
};
