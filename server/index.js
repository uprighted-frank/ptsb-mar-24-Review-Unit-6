const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const sessionValidation = require("./middleware/sessionValidation");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const iceCreamRoutes = require("./routes/iceCreamRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error!"));
db.once("open", () => {
    console.log("Connected to DB")
})

app.use("/users", userRoutes);
app.use("/icecream", sessionValidation, iceCreamRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
})
