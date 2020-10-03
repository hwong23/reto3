const request = require ('request');
const em = require ('../ensambla/ensamblar.js');

var express = require('express');
var router = express.Router();
const url = 'https://learnwapp.azurewebsites.net/secreto';


router.post('/', function(req, res, next) {
    request ({
        url: url,
        method: "POST",
        json: true,  
        body: req.body,
        }, 
        function (error, response, body) {
            if (error) return console.log(response);

            const r = em.cambiar ( response.body );
            res.send( r );            
        });
});


module.exports = router;
