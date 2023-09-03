const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.use((req, res) => {
  res.json(process.env);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening at port ${PORT}`);
});
