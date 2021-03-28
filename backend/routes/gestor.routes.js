const express = require('express');
const app = express();

const gestorRoute = express.Router();
let Gestor = require('../model/Gestor');

// Añadir gestor
gestorRoute.route('/').post((req, res, next) => {
    Gestor.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Gestor añadido satisfactoriamente');
    }
  })
});

// Obtener todos los gestors
gestorRoute.route('/').get((req, res) => {
    Gestor.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Gestores listados satisfactoriamente');
    }
  })
});

// Obtener Gestor
gestorRoute.route('/:id').get((req, res) => {
    Gestor.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Gestor seleccionado satisfactoriamente');
    }
  })
});

// Actualizar Gestor
gestorRoute.route('/:id').put((req, res, next) => {
    Gestor.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Gestor actualizado satisfactoriamente');
    }
  })
});

// Eliminar gestor
gestorRoute.route('/:id').delete((req, res, next) => {
    Gestor.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
      console.log('Gestor eliminado satisfactoriamente');
    }
  })
});

module.exports = gestorRoute;