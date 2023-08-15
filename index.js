const http = require("http");

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome ");
    res.end("<h1>home</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome ");
    res.end("<h1>to about us page</h1>");
  } else if (url === "/node") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome ");
    res.end("<h1>to my node js project</h1>");
    // res.write("error");
  }
  // process.exit();
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
