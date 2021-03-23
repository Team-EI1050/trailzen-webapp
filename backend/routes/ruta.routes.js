const express = require('express');
const app = express();

const rutaRoute = express.Router();
let Ruta = require('../model/Ruta');

// Añadir ruta
rutaRoute.route('/add-ruta').post((req, res, next) => {
    Ruta.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Obtener todos los rutas
rutaRoute.route('/').get((req, res) => {
    Ruta.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Obtener Ruta
rutaRoute.route('/get-ruta/:id').get((req, res) => {
    Ruta.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Actualizar Ruta
rutaRoute.route('/update-ruta/:id').put((req, res, next) => {
    Ruta.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Ruta actualizado satisfactoriamente');
    }
  })
});

// Eliminar ruta
rutaRoute.route('/delete-ruta/:id').delete((req, res, next) => {
    Ruta.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});

module.exports = rutaRoute;