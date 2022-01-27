const express = require("express");

const friendsController = require("../controllers/friends.controller");

//express router middleware
const friendsRouter = express.Router();

//route handlers...controllers
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriend);

module.exports = friendsRouter;
