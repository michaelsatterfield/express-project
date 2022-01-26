//imports
const express = require("express");

const friendsRouter = require("./routes/friends.router");
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

//mount the friendsRouter
app.use("/friends", friendsRouter);

app.get("/messages", messagesController.getMessage);
app.post("/messages", messagesController.postMessage);

//runs on port, callback that runs when server starts
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
