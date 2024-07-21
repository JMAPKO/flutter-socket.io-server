const {io} = require("../index");
const Band = require("../models/band");
const Bands = require("../models/bands");


const bands = new Bands(); // INICIALIZAMOS EL ARREGLO
console.log("Inicializando Servidor");

bands.nuevaBanda(new Band("Heroes del silencio"));
bands.nuevaBanda(new Band("Metallica"));
bands.nuevaBanda(new Band("Breaking Benjamin"));
bands.nuevaBanda(new Band("SUM 41"));
console.log(bands);



//comunicacion del sockets
io.on("connection", client => {

    console.log("cliente conectado al SERVIDOR");

    client.emit("bandas-activas", bands.traerBandas());

    client.on("disconnect", () => {
        console.log("cliente desconectado");
    });


    client.on("mensaje", (payload) => {
        console.log("mensaje!!!", payload);

        //io.emit("mensaje", {admin: "Nuevo mensaje"});

    });

    client.on("emitir-mensaje", (payload) => {
        console.log(payload["enviado"]+":", payload["mensaje"]);
        //client.broadcast.emit("nuevo-mensaje", payload);

    });

    client.on("saludo", (payload) =>{
        console.log(payload)
    });

    client.on("votar", payload => {
        bands.votarBanda(payload.id);
        io.emit("bandas-activas", bands.traerBandas());
    });

    client.on("agregar-band", payload => {
        bands.nuevaBanda(new Band(payload.name));
        io.emit("bandas-activas", bands.traerBandas());
    });

    client.on("borrar", (payload) =>{
        bands.borrarBandas(payload.id);
        io.emit("bandas-activas", bands.traerBandas());
    });


});
