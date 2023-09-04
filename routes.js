const express = require("express");
const homeController = require("./controller");
const router = express.Router();

router.post("/add", homeController.addData);
router.get("/all-users", homeController.getUsers);
router.delete("/delete-user/:id", homeController.deletUser);
router.put("/edit-user/:id", homeController.editUser);

module.exports = router;
