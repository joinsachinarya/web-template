const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form method="POST" action="/admin/add-product"><input type="text" name="item" placeholder="Item name"><input type="number" name="size" placeholder="Item size"><button type="submit">Send</button></form>`
  );
});

router.post("/add-product", (req, res, next) => {
  console.log("Name: ", req.body.item);
  console.log("Size: ", req.body.size);
  res.redirect("/shop");
});

module.exports = router;
