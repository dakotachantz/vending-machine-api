const express = require("express");
const itemRoutes = express.Router();
const Item = require("../models/ItemModel");

itemRoutes
    .route("/")
    .get(function (req, res) {
        Item.find()
            .then(function (foundItems) {
                res.send(foundItems);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    })
    .post(function (req, res) {
        let newItem = new Item(req.body);
        newItem
            .save()
            .then(function (savedItem) {
                res.send(savedItem);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    });

module.exports = itemRoutes;