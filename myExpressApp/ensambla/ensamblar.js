const cambiar = function (a) {
    const {posicion:p, mensaje:m} = a;
    
    const r = {
         position: p,
         messsage: (m.mensaje.join(' '))
    }

    console.log ('p' + r);
    return r;
}




module.exports = {
    cambiar : cambiar
};