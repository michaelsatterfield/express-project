const path = require("path");

//use named function at top level for exporting ect for debugging purposes!
function getMessage(req, res) {
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
  //   res.send("<h1>hello tester person!</h1>");
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessage,
  postMessage,
};
