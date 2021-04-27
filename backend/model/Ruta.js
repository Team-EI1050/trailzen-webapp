const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ruta = new Schema ({
    nombre: { type: String },
    distancia: { type: Number },
    coordenadas: [ {lat: {type: Number}, lon:{type: Number}} ], //Array de coordenadas para dibujar la ruta
    circular: { type: Boolean },
    aprobada: { type: Boolean },
    fotos: [ { nombre: { type: String }, url:{ type: String }}],
    viable: { type: Boolean },
    descripcion: { type: String },
    valoraciones: [ {valoracion: {type: Number}, nickname:{type: String}} ] //Valorar una ruta
},{collection: 'rutas'
})

module.exports = mongoose.model('Ruta', Ruta);