const mongoose = require("mongoose");

const iceCreamSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true
    },
    softServe: Boolean,
    manufacturer: String,
    scoopQuantity: Number
}, { versionKey: false });

module.exports = mongoose.model("IceCream", iceCreamSchema);