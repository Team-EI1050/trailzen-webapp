const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Senderista = new Schema ({
    _id: String,
    correo: String,
    nickname: String,
    contrasenya: String,
    fechaCreacion: String,
    descripcion: String,
    nombre: String,
    apellido: String,
    fotoPerfil: String,
    tipo: String
},{collection: 'senderistas'
})

module.exports = mongoose.model('Senderista', Senderista);