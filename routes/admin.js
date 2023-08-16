const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log("Name: ", req.body.item);
  console.log("Size: ", req.body.size);
  res.redirect("/shop");
});

module.exports = router;
