const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/userController")


// userRoutes.post("/", userController.createUser);
userRoutes.post("/", userController.newCreateUser);
userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUserById);
userRoutes.delete("/:id", userController.deleteUserById);

module.exports = userRoutes;