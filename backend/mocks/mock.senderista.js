
let Senderista = require('../model/Senderista');

const SENDERISTAS = [
    { 
      _id: "alberto",
      correo: "al341966@uji.es",
    nickname: "alberto",
    contrasenya: "qwerty",
    fechaCreacion: "23/03/2021",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    nombre: "Alberto",
    apellido: "Pacheco Catalán",
    fotoPerfil: "https://photonomad.es/wp-content/uploads/2018/12/selfie.jpg",
    tipo: "SENDERISTA"
  }, 
  { 
    _id: "senderista",
    correo: "alXX@uji.es",
  nickname: "alberto",
  contrasenya: "senderista",
  fechaCreacion: "23/03/2021",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  nombre: "Senderista",
  apellido: "Apellidos",
  fotoPerfil: "https://photonomad.es/wp-content/uploads/2018/12/selfie.jpg",
  tipo: "SENDERISTA"
  }, 
  { _id: "miriam",
    correo: "al356376@uji.es",
      nickname: "miriam",
      contrasenya: "qwerty",
      fechaCreacion: "23/03/2021",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      nombre: "Miriam",
      apellido: "Martinez Pérez",
      fotoPerfil: "None",
      tipo: "SENDERISTA"
      
    }, 
    { 
      _id: "jetix",
      correo: "al121166@uji.es",
      nickname: "jetix",
      contrasenya: "qwerty",
      fechaCreacion: "23/03/2021",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      nombre: "Julián",
      apellido: "De la Rosa Suarez",
      fotoPerfil: "None",
      tipo: "SENDERISTA"
    },
    { 
      _id: "ubuxu",
      correo: "al156786@uji.es",
    nickname: "ubuxu",
    contrasenya: "qwerty",
    fechaCreacion: "23/03/2021",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    nombre: "Carlos",
    apellido: "Merenge Tur",
    fotoPerfil: "None",
    tipo: "SENDERISTA"
  }  
]

function addMock(){

  Senderista.countDocuments( function (err, count) {
    if (err){
        console.log("Error a la hora de contar documetnos en Senderista: " + err)
    }else{
        if(count == 0){
            SENDERISTAS.forEach(obj => {
            senderista = new Senderista(obj)
            senderista.save().then(() => console.log("- Mock senderista " + obj.nickname + " añadido/a."));
        })
        }
    }
  });
}

exports.addMock = addMock;
