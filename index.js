const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Logging inside a middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Logging inside anohter middleware");
});

app.listen(4000, () => {
  console.log("Server is listening on port 4000!");
});
