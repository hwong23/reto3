var express = require('express');


var version = "0.25";
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Reto', version: version });
});


module.exports = router;
