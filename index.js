const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("This middleware always runs");
  next();
});

app.get("/", (req, res) => {
  res.send("<h2>This is home page</h2>");
});

app.get("/add-product", (req, res, next) => {
  console.log("Add product page");
  res.send(
    `<form method="POST" action="/products"><input type="text" name="item" placeholder="Item name"><input type="number" name="size" placeholder="Item size"><button type="submit">Send</button></form>`
  );
});

app.post("/products", (req, res, next) => {
  console.log("Name: ", req.body.item);
  console.log("Size: ", req.body.size);
  res.redirect("/");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000!");
});
