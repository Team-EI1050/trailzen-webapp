const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Gestor = new Schema ({
    _id: { type: String },
    correo: { type: String },
    nickname: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    contrasenya: { type: String },
    fechaCreacion: { type: String },
    descripcion: { type: String },
    dni: { type: String },
    tipo: { type: String}
},{collection: 'gestores'
})

module.exports = mongoose.model('Gestor', Gestor);