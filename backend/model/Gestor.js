const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Gestor = new Schema ({
    _id: String,
    correo: String,
    nickname: String,
    nombre: String,
    apellido: String,
    contrasenya: String,
    fechaCreacion: String,
    descripcion: String,
    dni: String,
    tipo: String
},{collection: 'gestores'
})

module.exports = mongoose.model('Gestor', Gestor);