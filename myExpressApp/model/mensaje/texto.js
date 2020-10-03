const fs = require ('fs');
var inputJSON;

const refrescar = function () {
    inputJSON = '';

    const buffer = fs.readFileSync ('./public/json/inputMensaje.json');
    const dataJSON = buffer.toString();
    inputJSON = JSON.parse (dataJSON);

    console.log ('texto::refrescar ' + inputJSON);
}


const getDistancia = function (distanciaP) {    
    const satelite = inputJSON.satellites.filter (function (sat) {
        return sat.name === distanciaP;
    });

    return satelite[0];
}

const getTexto = function (distanciaP) {
    const satelite = inputJSON.satellites.filter (function (sat) {
        return sat.name === distanciaP;
    });

    return satelite[0].message;
}


module.exports = {
    getDistancia : getDistancia,
    getTexto : getTexto,
    refrescar : refrescar
};
