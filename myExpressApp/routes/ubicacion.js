var express = require('express');
const triangulacion = require ('../model/triangulacion/triangulacion.js');
const util = require ('util');

var router = express.Router();


router.get('/', function(req, res, next) {
  res.send( triangulacion.ejecUbicacion() );
});


module.exports = router;
