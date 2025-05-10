const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const PORT = 8081;
const userService = require("./services/userService");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

const userRoutes = require("./routes/userRoutes");
const { connectDB } = require("./db/db");

try {
  connectDB();
} catch (err) {
  connectDB.connectToDB();
}

app.use("/users", userRoutes);

app.get("/invoiceId", async (req, res) => {
  const count = await userService.getCount();
  res.status(200).json(count);
});

app.get("/", (req, res) => {
  res.status(200).json({
    application: "rs-hardware",
    version: 2.3,
    "health-check": "Success",
    developer: "2x+1",
  });
});



app.listen(PORT, () => {
    console.log("Server Started on PORT: " + "http://localhost:" + PORT);
})