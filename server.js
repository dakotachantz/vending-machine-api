const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const itemRoutes = require("./routes/itemRoutes");


const app = express();
mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost:27017/vending-machine");

app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/items", itemRoutes);

app.listen(3000, console.log("Server running on port 3000."));
