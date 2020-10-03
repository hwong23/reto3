const texto = require ('./texto.js');
var textos = [];


const cargarTexto = function () {
    texto.refrescar();
    textos = [];

    textos.push (texto.getTexto ("kenobi"));
    textos.push (texto.getTexto ("skywalker"));
    textos.push (texto.getTexto ("sato"));    

    console.log ('Puntos ' + JSON.stringify(textos));
}


const creadorMensaje = {
    sumarArreglo (a, b) {
        const nueva = [];
        for (i = 0; i < a.length; i++) {
            nueva.push( this.orOp (a[i], b[i]) );
        }
        
        return nueva;
    },

    newArray2 (a) {
        if (a.length === 1) return a;

        const c = a.shift();
        a[0] = this.sumarArreglo (c, a[0]);
        
        return this.newArray2 (a);
    },

    orOp (a, b) {
        return (a === '') ? b: a;
    }
}

const ejecMensaje = function () {
    cargarTexto();

    const mensaje =  creadorMensaje.newArray2 (textos);
    
    const objMensaje = {
        mensaje: mensaje[0]
    }

    return objMensaje;
}


module.exports = {
    ejecMensaje: ejecMensaje
}
