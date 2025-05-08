const express = require("express");

const app = express();
app.use(express.json());
const PORT = 8080



const userRoutes =  require("./routes/userRoutes");
const { connectDB } = require("./db/db");



try {
    connectDB();
} catch (err) {
    connectDB.connectToDB()
}

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.status(200).json({application:"rs-hardware",version:2.1,"health-check":"Success",developer:"2x+1"})
})

app.listen(PORT, () => {
    console.log("Server Started on PORT: " + "http://localhost:" + PORT);
})