const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/public");
const errorHandler = require("./handlers/missing");
const searchHandler = require("./handlers/search");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else if (url.includes("search")) {
    searchHandler(request, response);
  } else {
    errorHandler(request, response);
  }
}

module.exports = router;
