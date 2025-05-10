const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  sno: String,
  id: String,
  item: String,
  hsn: String,
  rate: String,
  qty: String,
  taxableValue: String,
  taxAmount: String,
  total: String,
});

const userSchema = new mongoose.Schema({
  invoiceId: String,
  invoiceDate: String,
  name: String,
  email: String,
  phoneNumber: String,
  billingAddress: String,
  gstIn: String,
  placeOfSupply: String,
  totalAmount: String,
  dueDate: String,
  items: [itemSchema],
});

const User = mongoose.model("newUserData", userSchema);

module.exports = User;
