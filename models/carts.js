const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  depature: String,
  arrival: String,
  date: Date,
  price:  Number,
});

const Cart = mongoose.model("carts", cartSchema)

module.exports = Cart;
