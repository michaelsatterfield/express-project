//post friends
function postFriend(req, res) {
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
}

//get friends
function getFriends(req, res) {
  res.json(friends);
}

(req, res) => {
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
};

//get individual friend
function getFriend(req, res) {
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
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
