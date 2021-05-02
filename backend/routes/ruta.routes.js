const express = require('express');
const app = express();

const rutaRoute = express.Router();
let Ruta = require('../model/Ruta');

// Añadir ruta
rutaRoute.route('').post((req, res, next) => {
    Ruta.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Ruta añadida satisfactoriamente');
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
rutaRoute.route('/:id').get((req, res) => {
    Ruta.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Ruta seleccionada satisfactoriamente');
    }
  })
});

// Actualizar Ruta
rutaRoute.route('/:id').put((req, res, next) => {
    Ruta.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Ruta actualizada satisfactoriamente');
    }
  })
});

// Eliminar ruta
rutaRoute.route('/:id').delete((req, res, next) => {
    Ruta.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
      console.log('Ruta eliminada satisfactoriamente');
    }
  })
});

module.exports = rutaRoute;