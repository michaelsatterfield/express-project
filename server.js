const express = require("express");

const app = express();

const PORT = 5000;

const friends = [
  {
    id: 0,
    name: "Isaac Newton",
  },
  {
    id: 0,
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

//route handlers
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

app.get("/2", (req, res) => {
  res.send("<h1>hello tester person!</h1>");
});

app.post("/3", (req, res) => {
  console.log("test!");
});

//runs on port, callback that runs when server starts
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
