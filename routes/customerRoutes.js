const express = require("express");
const customerRoutes = express.Router();
const Item = require("../models/Item");

customerRoutes
    .route("/items")
    .get(getAllItems)

module.exports = customerRoutes;

function getAllItems(req, res) {
    Item.find()
        .then(function (foundItems) {
            console.log(foundItems);
            return res.json({ status: "success", data: foundItems });
        })
        .catch(function (err) {
            return res.status(500).send({ status: "fail", err: err });
        });
}
