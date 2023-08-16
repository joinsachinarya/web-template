const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res) => {
  res.send(`
    <form method="POST" action="/product">
      <input type="text" placeholder="item name" name="item">
      <input type="number" placeholder="size" name="size">
      <button type="submit">Send</button>
    </form>
  `);
});

app.post("/product", (req, res) => {
  const itemName = req.body.item;
  const itemSize = req.body.size;
  console.log("Item Name:", itemName);
  console.log("Item Size:", itemSize);
  res.send("Product added successfully!"); // You can send a response here
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000!");
});
