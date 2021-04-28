const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comentario = new Schema ({
    nickname: String,
    comentario: String
},{collection: 'comentarios'
})

module.exports = mongoose.model('Comentario', Comentario);