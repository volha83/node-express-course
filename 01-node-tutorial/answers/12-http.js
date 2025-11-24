const http = require("http");
const server = http.createServer((rec, res) => {
  console.log("Request URL:", rec.url);
  if (rec.url === "/") {
    res.writeHead(200, { Content: "text/html;  charset=utf-8" });
    res.end(
      "<h1>Welcome to my first Node server</h1> <p>This is the Home page</p>"
    );
  } else if (rec.url === "/about") {
    res.writeHead(200, { Content: "text/html;  charset=utf-8" });
    res.end("<h1>About page</h1> <p>This server on port 3000</p>");
  } else {
    res.writeHead(404, { Content: "text/html;  charset=utf-8" });
    res.end("<h1>404 - Page not found</h1>");
  }
});
server.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
