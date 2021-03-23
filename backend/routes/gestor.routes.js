const express = require('express');
const app = express();

const gestorRoute = express.Router();
let Gestor = require('../model/Gestor');

// Añadir gestor
gestorRoute.route('/add-gestor').post((req, res, next) => {
    Gestor.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
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
    }
  })
});

// Obtener Gestor
gestorRoute.route('/get-gestor/:id').get((req, res) => {
    Gestor.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Actualizar Gestor
gestorRoute.route('/update-gestor/:id').put((req, res, next) => {
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
gestorRoute.route('/delete-gestor/:id').delete((req, res, next) => {
    Gestor.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
});

module.exports = gestorRoute;