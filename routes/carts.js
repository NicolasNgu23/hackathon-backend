var express = require('express');
var router = express.Router();

//Get trips by departure/arrival/date
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;