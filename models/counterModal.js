const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    invoiceId:Number
})

const CounterTable = mongoose.model("countnow", counterSchema);

module.exports = CounterTable;