const User = require("../models/user");

async function addUserController(req, res) {
  const user = req.body;

  try {
    const newUser = await User.create(user);
    res.json(newUser);
  } catch (e) {
    res.json(e.message);
  }
}

async function getUserController(req, res) {
  const userId = req.params.id;

  const user = await User.findOne({ _id: userId });
  res.json(user);
}

async function getUsersController(req, res) {
  const allUsers = await User.find({});
  res.json(allUsers);
}

async function updateUserController(req, res) {
  const userId = req.params.id;
  const updatedUser = req.body;

  const updated = await User.findOneAndUpdate({ _id: userId }, updatedUser, {
    new: true,
  });

  res.json(updated);
}

async function deleteUserController(req, res) {
  const userId = req.params.id;

  const result = await User.findOneAndRemove({ _id: userId });

  res.json(result);
}

module.exports = {
  addUserController,
  getUserController,
  getUsersController,
  updateUserController,
  deleteUserController,
};
