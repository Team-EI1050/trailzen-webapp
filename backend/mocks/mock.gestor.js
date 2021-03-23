let Gestor = require('../model/Gestor');

const GESTOR = [
    { correo: "al567826@uji.es",
    nickname: "admin1",
    nombre: "Daniel",
    apellido: "Garcia Ruiz",
    contrasenya: "Extrauren",
    fechaCreacion: "23/03/2021",
    descripcion: "Gestor de la plataforma trailzen", 
    dni: "56456734F"
  }, 
  { correo: "al167933@uji.es",
    nickname: "admin2",
    nombre: "Miguel",
    apellido: "Sans Paz",
    contrasenya: "dudud",
    fechaCreacion: "23/03/2021",
    descripcion: "Gestor de la plataforma trailzen", 
    dni: "56456566W"
  },
]

function addMock(){

    GESTOR.forEach(obj => {
        gestor = new Gestor(obj)
        gestor.save().then(() => console.log("- Mock gestor " + obj.nickname + " añadido/a."));
    })
}

exports.addMock = addMock;