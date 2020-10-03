var express = require('express');


var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('ayuda', { title: 'Ayuda del Reto' });
});


module.exports = router;
