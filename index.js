const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
