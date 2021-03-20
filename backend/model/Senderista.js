const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Senderista = new Schema ({
    correo: { type: String },
    nickname: { type: String },
    contrasenya: { type: String },
    fechaCreacion: { type: String },
    descripcion: { type: String },
    nombre: { type: String },
    apellido: { type: String },
    fotoPerfil: { type: String }
},{collection: 'senderistas'
})

module.exports = mongoose.model('Senderista', Senderista);