const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h2>This is home page</h2>");
});

module.exports = router;
