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

//express app function

//route handlers
app.get("/friends", (req, res) => {
  res.send(friends);
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
