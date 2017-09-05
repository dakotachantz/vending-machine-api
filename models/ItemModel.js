const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: Number,
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Item", itemSchema);