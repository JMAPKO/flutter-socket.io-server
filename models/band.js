const {v4: uuidv4} = require("uuid");



class Band {

    constructor( name = "no-name"){
        this.id = uuidv4(); 
        this.name = name;
        this.vote = 0;
    }

}

//TENEMOS QUE EXPORTAR EL MODULO
// A diferencia de dart que podemos importar las clases facilemente, en node tenemos
// que exportar las clases manualmente

module.exports = Band;