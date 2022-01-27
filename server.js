//imports
const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

//sets engine for handlebars templating addon
app.set("view engine", "hbs");
//set 'views' express parameter and path
app.set("views", path.join(__dirname, "views"));

const PORT = 5000;

//custom middleware
app.use((req, res, next) => {
  //log time taken for response
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url}  ${delta}ms`);
});

//express static file middleware.....serves up webpage from frontend ..path.join for absolute path
app.use("/site", express.static(path.join(__dirname, "public")));

//parsing middleware
app.use(express.json());

//mount the routers
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

// path to render handlebars front end view
app.get("/", (req, res) => {
  res.render("index", {
    title: "My friends are very clever!",
    caption: "France is pretty!",
  });
});

//runs on port, callback that runs when server starts
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
