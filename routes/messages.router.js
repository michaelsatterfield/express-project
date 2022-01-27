const express = require("express");

const messagesController = require("../controllers/messages.controller");

//express router middleware
const messagesRouter = express.Router();

//route handlers...controllers
messagesRouter.get("/", messagesController.getMessage);
messagesRouter.post("/", messagesController.postMessage);

module.exports = messagesRouter;
