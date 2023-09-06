const Student = require("./model");

exports.addStudent = (req, res, next) => {
  const body = {
    name: req.body.name,
    rollNo: req.body.rollNo,
    fatherName: req.body.fatherName,
    age: req.body.age,
  };
  //   console.log(body);
  Student.create(body)
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getStudents = (req, res, next) => {
  Student.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json("error");
    });
};

exports.deleteStudent = (req, res, next) => {
  console.log(req.params.id);
  Student.findByPk(req.params.id)
    .then((result) => {
      console.log(result);
      result.destroy();
      res.json(result);
    })
    .catch((err) => console.error(err));
};

exports.updateStudent = (req, res, next) => {
  const updatedValues = {
    name: req.body.name,
    rollNo: req.body.rollNo,
    fatherName: req.body.fatherName,
    age: req.body.age,
  };
  Student.findByPk(req.params.id)
    .then((result) => {
      console.log(result);
      result.update(updatedValues);
      res.json(result);
    })
    .catch((err) => console.error(err));
};
