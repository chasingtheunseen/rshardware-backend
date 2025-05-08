const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("DB Connected Successfully FIRST ONE");
    } catch (err) {
        console.log("Exception Occured");
    }
}



const connectToDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://mohammedjawadsaleem11:GymdOizqRZULHIdq@cluster0.n0btfbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected Successfully SECOND ONE");
  } catch (err) {
    console.log("Exception Occured");
  }
};


module.exports = { connectDB, connectToDB };