const express = require("express");

//controller imports
const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = 5000;

//custom middleware
app.use((req, res, next) => {
  //log time taken for response
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url}  ${delta}ms`);
});

//express app function

//parsing middleware
app.use(express.json());

//route handlers...controllers
app.post("/friends", friendsController.postFriend);
app.get("/friends", friendsController.getFriends);
app.get("/friends/:id", friendsController.getFriend);

app.get("/messages", messagesController.getMessage);
app.post("/messages", messagesController.postMessage);

//runs on port, callback that runs when server starts
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
