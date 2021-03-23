const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Ruta = new Schema ({
    nombre: { type: String },
    distancia: { type: Number },
    puntoInicio: { type: String },
    puntoFin: { type: String },
    circular: { type: Boolean },
    aprobada: { type: Boolean },
    fotos: [ { nombre: { type: String }, url:{ type: String }}],
    viable: { type: Boolean }
},{collection: 'rutas'
})

module.exports = mongoose.model('Ruta', Ruta);