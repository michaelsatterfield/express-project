const model = require("../models/friends.model");

console.log("test" + model);

//post friends
function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  //pushes to new friend array
  model.push(newFriend);
  //responds with json
  res.json(newFriend);
}

//get friends
function getFriends(req, res) {
  res.json(model);
}

(req, res) => {
  const id = Number(req.params.id);
  const friend = model[id];
  //if friend is found return the friend json object
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "This friend does not exist",
    });
  }
};

//get individual friend
function getFriend(req, res) {
  const id = Number(req.params.id);
  const friend = model[id];
  //if friend is found return the friend json object
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "This friend does not exist",
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
