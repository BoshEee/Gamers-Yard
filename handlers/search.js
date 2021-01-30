const fs = require("fs");
const path = require("path");

function searchHandler(request, response) {
  const params = new URLSearchParams(request.url.split("?")[1]);
  const gameName = params.get("name");

  const filePath = path.join(__dirname, "..", "data.json");
  fs.readFile(filePath, { encoding: "utf-8" }, (err, file) => {
    if (err) {
      console.log(err);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1> Not Found </h1>");
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      let games = JSON.parse(file).filter((game) => {
        return game.name.toLowerCase().startsWith(gameName.toLowerCase());
      });
      response.end(JSON.stringify(games));
    }
  });
}

module.exports = searchHandler;
