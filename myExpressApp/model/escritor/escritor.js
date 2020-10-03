const fs = require ('fs');


const escribir = function (objJSON) {
    const strJSON = JSON.stringify (objJSON);
    fs.writeFileSync ( './public/json/inputMensaje.json', strJSON);

    return 0;
}


module.exports = escribir;