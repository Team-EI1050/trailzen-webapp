const express = require('express');
const app = express();

const senderistaRoute = express.Router();
let Senderista = require('../model/Senderista');

// Añadir senderista
senderistaRoute.route('/').post((req, res, next) => {
    Senderista.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Senderista añadido satisfactoriamente');
    }
  })
});

// Obtener todos los senderistas
senderistaRoute.route('/').get((req, res) => {
    Senderista.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Senderistas listados satisfactoriamente');
    }
  })
});

// Obtener Senderista
senderistaRoute.route('/:id').get((req, res) => {
    Senderista.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Senderista seleccionado satisfactoriamente');
    }
  })
});

// Actualizar Senderista
senderistaRoute.route('/:id').put((req, res, next) => {
    Senderista.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      res.json(data)
      console.log('Senderista actualizado satisfactoriamente');
    }
  })
});

// Eliminar senderista
senderistaRoute.route('/:id').delete((req, res, next) => {
    Senderista.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
      console.log('Senderista eliminado satisfactoriamente');
    }
  })
});

module.exports = senderistaRoute;