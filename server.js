const express = require("express");

//controller imports
const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = 5000;

const friends = [
  {
    id: 0,
    name: "Isaac Newton",
  },
  {
    id: 1,
    name: "Albert Einstein",
  },
];

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
//....post request
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  //pushes to new friend array
  friends.push(newFriend);
  //responds with json
  res.json(newFriend);
});

// ...get request
app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:id", (req, res) => {
  const id = Number(req.params.id);
  const friend = friends[id];
  //if friend is found return the friend json object
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "This friend does not exist",
    });
  }
});

app.get("/messages", messagesController.getMessage);

app.post("/messages", messagesController.postMessage);

//runs on port, callback that runs when server starts
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
