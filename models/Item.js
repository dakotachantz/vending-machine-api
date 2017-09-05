const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: String,
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Item", itemSchema);