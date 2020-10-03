const fs = require ('fs');

const buffer = fs.readFileSync ('./public/json/inputPuntos.json');
const dataJSON = buffer.toString();
const puntos = JSON.parse (dataJSON);



const getPunto = function (puntoP) {   
    return puntos[puntoP];
}


module.exports = {
    getPunto : getPunto
};

