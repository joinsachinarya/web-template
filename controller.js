const User = require("./model");

exports.addData = (req, res, next) => {
  const body = {
    name: req.body.name,
    age: req.body.age,
  };
  console.log(req.body);
  User.create(body)
    .then((result) => {
      // console.log("Created", result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error();
      res.status(500).json(new Error("An error occured"));
    });
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((result) => {
      // console.log("Users fetched", result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(new Error("An error occured"));
    });
};

exports.deletUser = (req, res, next) => {
  let id = req.params.id;
  User.findByPk(id)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
      }
      result.destroy();
      console.log("destroyed", result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("An error occured");
    });
};

exports.editUser = (req, res, next) => {
  const updatedValues = {
    name: req.body.name,
    age: req.body.age,
  };
  let id = req.params.id;
  console.log(id, updatedValues);
  User.findByPk(id)
    .then((result) => {
      if (!result) {
        res.json(404).json("User not found");
      }
      return result.update(updatedValues);
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json("An error occured");
    });
};
