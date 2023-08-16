const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(4000, () => {
  console.log("Server is listening on port 4000!");
});
