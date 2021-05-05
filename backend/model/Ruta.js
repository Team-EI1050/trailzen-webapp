const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ruta = new Schema ({
    nombre: String,
    distancia: Number,
    coordenadas: [ {lat: Number, lon: Number} ], //Array de coordenadas para dibujar la ruta
    circular: Boolean,
    aprobada: Boolean,
    fotos: [ { nombre: String, url: String} ],
    viable: Boolean,
    creador: String,
    descripcion: String,
    valoracion: Number,
    valoraciones: [ { nickname: String, valor: String } ],
    comentarios: [ { nickname: String, comentario: String } ]
},{collection: 'rutas'
})

module.exports = mongoose.model('Ruta', Ruta);