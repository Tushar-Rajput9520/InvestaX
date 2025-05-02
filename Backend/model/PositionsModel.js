const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
});

const PositionsModel = mongoose.model("positions", PositionsSchema);

module.exports = { PositionsModel };
