const http = require("http");
const server = http.createServer((req, res) => {
  console.log("hey seachin from server");
});
server.listen(4000);
