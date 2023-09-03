const User = require("./model");

exports.addData = (req, res, next) => {
  const body = {
    name: req.body.name,
    age: req.body.age,
  };
  User.create({ body })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error();
      res.json(new Error("An error occured"));
    });
};
