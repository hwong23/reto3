var express = require('express');
const textos = require ('../model/mensaje/mensaje.js');
const util = require ('util');

var router = express.Router();


router.get('/', function(req, res, next) {
  res.send( textos.ejecMensaje() );
});


module.exports = router;
