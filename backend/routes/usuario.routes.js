const express = require('express');
const app = express();

const userRoute = express.Router();
let Senderista = require('../model/Senderista');
let Gestor = require('../model/Gestor');

// Crear un usuario en la base de datos
userRoute.route('/').post((req, res, next) => {
  Promise.all([
    Senderista.findById(req.body['nickname']),
    Gestor.findById(req.body['nickname'])
  ]).then(value => {
    if (value.some((value) => value != null))
      next(new Error('[ERROR]: Ya existe un usuario/a con este nickname'))
    else {
      if (req.body['tipo'] == 'SENDERISTA') {
        Senderista.create(req.body, (error, data) => {
          if (error) {
            console.log('[ERROR] Error en la creación de usuario/a ')
            return next(error)
          } else {
            res.json(data)
            console.log('[STATUS] Senderista ( ' + req.body['nickname'] + ' ) añadido/a');
          }
        })
      } else {
        Gestor.create(req.body, (error, data) => {
          if (error) {
            console.log('[ERROR] Error en la creación de usuario/a ')
            return next(error)
          } else {
            res.json(data)
            console.log('[STATUS] Gestor ( ' + req.body['nickname'] + ' ) añadido/a');
          }
        })
      }
    }
  })
});



// Obtener un usuario de la base de datos
userRoute.route('/:id').get((req, res) => {
  Promise.all([
    Senderista.findById(req.params['id']),
    Gestor.findById(req.params['id'])
  ]).then(value => {
    let o = null  
    for (let i in value){
      if (value[i] != null){
       o = value[i]
      } 
    }
    if (o == null)
      console.log('[ERROR] No se ha encontrado al usuario/a ( ' + req.params['id'] + ' )');
    else{
      console.log('[STATUS] Obtenido usuario/a ( ' + req.params['id'] + ' )');
    }
    res.json(o)
  })
});





module.exports = userRoute;
























// // Obtener Senderista
// senderistaRoute.route('/:id').get((req, res) => {
//     Senderista.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//       console.log('Senderista seleccionado satisfactoriamente');
//     }
//   })
// });






// // Añadir senderista
// senderistaRoute.route('/').post((req, res, next) => {
//     Senderista.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//       console.log('Senderista añadido satisfactoriamente');
//     }
//   })
// });





// // Obtener todos los senderistas
// senderistaRoute.route('/').get((req, res) => {
//     Senderista.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//       console.log('Senderistas listados satisfactoriamente');
//     }
//   })
// });

// // Obtener Senderista
// senderistaRoute.route('/:id').get((req, res) => {
//     Senderista.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//       console.log('Senderista seleccionado satisfactoriamente');
//     }
//   })
// });

// // Actualizar Senderista
// senderistaRoute.route('/:id').put((req, res, next) => {
//     Senderista.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       console.log(error)
//       return next(error);
//     } else {
//       res.json(data)
//       console.log('Senderista actualizado satisfactoriamente');
//     }
//   })
// });

// // Eliminar senderista
// senderistaRoute.route('/:id').delete((req, res, next) => {
//     Senderista.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//       console.log('Senderista eliminado satisfactoriamente');
//     }
//   })
// });