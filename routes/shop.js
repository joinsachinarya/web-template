const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>This is home page</h2>");
});

router.get("*", (req, res) => {
  res.send("<h2>We are lost : Error 404!</h2>");
});

module.exports = router;
