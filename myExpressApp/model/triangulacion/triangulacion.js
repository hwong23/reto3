const referencias = require ('./referencia.js');
const util = require ('util');


const ubicacion = function (satelites, puntos) {
    const distancias = dij (puntos);
    
    const d = distancias.d;
    const i = distancias.i;
    const j = distancias.j;

    const da = satelites[0].distance;
    const db = satelites[1].distance;
    const dc = satelites[2].distance;


    const x = (da**2 - db**2 + d**2) / parseFloat((2*d));
    const y = ((da**2 - db**2 + i**2 + j**2) / (2*j)) - (parseFloat (i/j) * x);


    const ubicacion = {
        x: x,
        y: y
    };


    console.log ('Ubicacion ' + util.inspect (ubicacion));
    return ubicacion;
}


const dij = function (P) {
    const d = Math.abs(P[0].x) + Math.abs(P[1].x);
    const i = Math.abs(P[0].x) + Math.abs(P[2].x);
    const j = Math.abs(P[0].y) + Math.abs(P[2].y);


    const distancias = {
        d: d,
        i: i,
        j: j
    };


    console.log ('Distancias ' + util.inspect (distancias));
    return distancias;
}


const ejecUbicacion = function () {
    var puntos = [];
    var satelites = [];

    referencias.cargarReferencias (satelites, puntos);
    return ubicacion(satelites, puntos);
}



module.exports = {
    ejecUbicacion: ejecUbicacion
};

