const express = require("express");
const router = express.Router();
const api = require("./api");

router.post("/add-student", api.addStudent);
router.get("/all-studenst", api.getStudents);
router.delete(`/delete/:id`, api.deleteStudent);
router.put("/update/:id", api.updateStudent);

module.exports = router;
