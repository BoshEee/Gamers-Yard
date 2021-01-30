const fs = require("fs");
const path = require("path");

function homeHandler(request, response) {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(error);
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
}

module.exports = homeHandler;
