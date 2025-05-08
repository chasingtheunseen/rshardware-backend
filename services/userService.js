const CounterTable = require("../models/counterModal");
const User = require("../models/userModel");

const createUser = async (userData) => {

    try {
        let count = await CounterTable.findOne();
        if (!count) {
           count= await CounterTable.create({ invoiceId :1});
        } else {
            count.invoiceId += 1;
            await count.save();
        }
        console.log("__________COUNT VALUES_________",count)
    const user = await User.create({
      ...userData,
      invoiceId: `INV-${count.invoiceId}`,
    });
    return user;
  } catch (err) {
    console.log("Error Creating a User", err);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (e) {
    console.log("Error Fetching all Users", e);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log("Error Fetching User By Id");
  }
};

const updateUserById = async (id, userData) => {
  try {
    const user = await User.findByIdAndUpdate(id, userData);
    return user;
  } catch (err) {
    console.log("Error Updating the User with the id " + id, err);
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (err) {
    console.log("Error Deleting User By Id", err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
