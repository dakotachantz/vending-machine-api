const express = require("express");
const vendorRoutes = express.Router();
const Item = require("../models/Item");

vendorRoutes
    .route("/items")
    .get(getAllItems)
    .post(addNewItem);

module.exports = vendorRoutes;

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

function addNewItem(req, res) {
    let newItem = new Item(req.body);
    newItem
        .save()
        .then(function (savedItem) {
            return res.json({ status: "success", data: savedItem });
        })
        .catch(function (err) {
            return res.status(500).send({ status: "fail", err: err });
        });
}
