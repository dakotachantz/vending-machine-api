const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const vendorRoutes = require("./routes/vendorRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost:27017/vending-machine");

app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/api/vendor", vendorRoutes);
app.use("/api/customer", customerRoutes);

module.exports = app;