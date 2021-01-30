const http = require("http");
const PORT = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Hello World!</h1>");
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
