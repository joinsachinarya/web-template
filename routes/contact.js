const express = require("express");
const path = require("path");
const rootDir = require("../utils/path");
const router = express.Router();

router.get("/contact", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.post("/success", (req, res) => {
  res.send("<h2>Form successfuly filled</h2>");
});

module.exports = router;
