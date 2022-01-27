//imports
const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

const PORT = 5000;

//custom middleware
app.use((req, res, next) => {
  //log time taken for response
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url}  ${delta}ms`);
});

//express app function

//parsing middleware
app.use(express.json());

//mount the routers
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

//runs on port, callback that runs when server starts
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
