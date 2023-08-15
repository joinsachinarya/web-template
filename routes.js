const fs = require("fs");

const requestHandler = (req, res) => {
  let url = req.url;
  let method = req.method;

  if (url === "/") {
    let textFileMessage = fs.readFileSync("message.txt", "utf-8");
    res.write("<html>");
    res.write("<head><title>Message</title></head>");
    res.write(
      `<body><form action='/message' method='POST'>   <h4>${textFileMessage}</h4>   <input type='text' name='myMessage' placeholder='message'> <button type='submit'>Send</button> </form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      console.log("chunks", chunks);
      body.push(chunks);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>App</title></head>");
  res.write("<body><h2>Welcome to my NodeJS app.</h2></body>");
  res.write("</html>");
  return res.end();
};
module.exports = requestHandler;
