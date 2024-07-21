// coleccion de bandas
// en ella agregamos las funciones para ver, agregar y quitar bandas, etc.

class Bands {

    constructor(){
        this.bands = [];
    }

    nuevaBanda(band = new Bands()){
        this.bands.push(band);
    }
    
    traerBandas(){
        return this.bands;
    }

    borrarBandas(id = ""){
        this.bands = this.bands.filter( band => band.id !== id);
        //return this.bands;
    }

    votarBanda(id = ""){
        this.bands = this.bands.map( band => {
            if (band.id === id){
                band.vote++;
                return band;
            } else {
                return band;
            }
        });
    }

}

module.exports = Bands;
