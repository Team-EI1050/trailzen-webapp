const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Valoracion = new Schema ({
    nickname: String,
    valoracion: Number
},{collection: 'valoraciones'
})

module.exports = mongoose.model('Valoracion', Valoracion);