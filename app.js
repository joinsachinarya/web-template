const express = require("express");
const sequelize = require("./db");
const homeRoutes = require("./routes");
const PORT = process.env.PORT || 4000;

const app = express();

app.use(homeRoutes);

app.use((req, res) => {
  res.json("Hey from last middleware");
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database is now syncing with server");
    app.listen(PORT, (req, res) => {
      console.log(`Server is listening at port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
