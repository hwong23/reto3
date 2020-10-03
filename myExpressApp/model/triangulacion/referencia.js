const punto = require ('./punto.js');
const texto = require ('../../model/mensaje/texto.js');


const cargarReferencias = function (s, p) {
    texto.refrescar();

    p.push (punto.getPunto ("P1"));
    p.push (punto.getPunto ("P2"));
    p.push (punto.getPunto ("P3"));
    

    s.push (texto.getDistancia ("kenobi"));
    s.push (texto.getDistancia ("skywalker"));
    s.push (texto.getDistancia ("sato"));
    
    
    console.log ('Puntos ' + JSON.stringify(p));
    console.log ('Satelites ' + JSON.stringify(s));    
}


module.exports = {
    cargarReferencias : cargarReferencias
};

