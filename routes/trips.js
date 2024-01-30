var express = require('express');
var router = express.Router();
var moment = require('moment');

const Trip = require("../models/trips");

//Get trips by departure/arrival

router.get('/',  (req, res) => {
  console.log(new Date(moment(req.body.date).startOf('day')))
 
  Trip.find({departure:{ $regex: new RegExp(req.body.departure, "i")}, arrival: { $regex: new RegExp(req.body.arrival, "i")}, date: { $gte: new Date(moment(req.body.date).startOf('day').utc(0)), $lte: new Date(moment(req.body.date).endOf('day').utc(0)) } 
  
}).then(data => {
  if (data.length>0) {
    res.json({result: true, trips: data});
  } else {
    res.json({ result: false, error: "Trip not found"});
  }
})
});




module.exports = router;


