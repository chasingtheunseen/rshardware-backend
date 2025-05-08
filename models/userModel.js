const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    invoiceId: String,
    name: String,
    email: String,
    phoneNumber: String,
    totalAmount: String
})

const User = mongoose.model("userdata", userSchema);

module.exports = User;