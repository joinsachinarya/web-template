const express = require("express");
const homeController = require("./controller");
const router = express.Router();

router.post("/add", homeController.addData);
router.get("/all-users", homeController.getUsers);

module.exports = router;
