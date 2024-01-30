var express = require('express');
var router = express.Router();
const Booking = require('../models/bookings');

//Create trip in booking
router.post('/', (req, res) => {
  const { departure, arrival, date, price } = req.body;
  const newBooking = new Booking({
    departure: departure,
    arrival: arrival,
    date: date,
    price: price
  });
  newBooking.save()
    .then((data) => {
      res.json({ bookings: data });
    })
});


//get all my booking
router.get('/', (req, res) => {
  Booking.find().then(data => {
    if (data.length === 0) {
      res.json({result: false, error: "no booking yet"});
    } else {
      res.json({bookings: data});
    }
  });
});


module.exports = router;
