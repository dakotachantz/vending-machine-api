const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    id: String,
    money_given: {
        type: Number,
        required: true
    },
    money_required: {
        type: Number,
        required: true
    },
    total_money: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Purchase", purchaseSchema);