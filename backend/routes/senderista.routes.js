const express = require('express');
const app = express();

const senderistaRoute = express.Router();
let Senderista = require('../model/Senderista');

// Añadir senderista
senderistaRoute.route('/add-senderista').post((req, res, next) => {
    Senderista.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
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
    }
  })
});

// Obtener Senderista
senderistaRoute.route('/get-senderista/:id').get((req, res) => {
    Senderista.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Actualizar Senderista
senderistaRoute.route('/update-senderista/:id').put((req, res, next) => {
    Senderista.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Senderista actualizado satisfactoriamente');
    }
  })
});

// Eliminar senderista
senderistaRoute.route('/delete-senderista/:id').delete((req, res, next) => {
    Senderista.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});

module.exports = senderistaRoute;