
const userService = require("../services/userService");


async function createUser(req, res) {
    try {
        const user = await userService.createUser(req.body);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({message:"Failed!",err})
    }
}
async function newCreateUser(req, res) {
  try {
    const user = await userService.newCreateUser(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Failed!", err });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: "Failed", err });
  }
}

async function getUserById(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Failed" });
  }
}

async function updateUserById(req, res) {
  try {
    const user = await userService.updateUserById(req.params.id, req.body);
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Failed" });
  }
}

async function deleteUserById(req, res) {
  try {
    const user = await userService.deleteUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: "Failed" });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  newCreateUser,
};