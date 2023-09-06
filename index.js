const express = require("express");
const db = require("./db");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

db.sync()
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server  is listening at ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
