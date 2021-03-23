let Ruta = require('../model/Ruta');

const RUTAS = [
    {
        nombre: "Ruta de ejemplo 1", 
        distancia: 200,
        puntoInicio: "Punto de inicio 1",
        puntoFin: "Punto fin 23",
        circular: true,
        aprobada: true,
        fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
        viable: true
  }
]

function addMock(){

    RUTAS.forEach(obj => {
        ruta = new Ruta(obj)
        ruta.save().then(() => console.log("- Mock ruta " + obj.nombre + " añadida."));
    })
}

exports.addMock = addMock;
