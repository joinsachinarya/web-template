const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000!");
});
