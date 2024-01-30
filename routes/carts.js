var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');

//Post with find cart
router.post('/', (req, res) => {
  const {departure, arrival, date, price} = req.body
  const newCart = new Cart({
    departure: departure,
    arrival: arrival,
    date: date,
    price: price,
    isValable: true
  });
	newCart.save().then(data => {
						res.json({cart: data });
					});
})

router.get('/', (req, res) => {
	Cart.find().then(data => {
						res.json({cart: data });
					});
})

router.delete("/:id", (req, res) => {
  const {id} = req.params;
  Cart.updateOne({ _id: id }, {isValable: false}).then(data => {
  res.json({cart: data });
  })
});



module.exports = router;