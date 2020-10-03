var express = require('express');
const util = require ('util');
const escribir = require ('../model/escritor/escritor.js');
const posicion = require ('../model/triangulacion/triangulacion.js');
const mensaje = require ('../model/mensaje/mensaje.js');


var router = express.Router();



router.get('/', function(req, res, next) {
    const p = posicion.ejecUbicacion() 
    const m = mensaje.ejecMensaje()

    const r = {
        posicion: p,
        mensaje: m
    }

    res.send( r );
});


router.post('/', function(req, res, next) {
    
    escribir ( req.body );
    
    const p = posicion.ejecUbicacion() 
    const m = mensaje.ejecMensaje()

    const r = {
        posicion: p,
        mensaje: m
    }

    res.send( r );
});


module.exports = router;
