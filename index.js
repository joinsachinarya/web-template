const http = require("http");

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/home") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome ");
    res.end("home");
  } else if (url === "/about") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome ");
    res.end("to about us page");
  } else if (url === "/node") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome ");
    res.end("to my node js project");
  }
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
