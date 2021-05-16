
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
    fotoPerfil: "http://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg",
    tipo: "SENDERISTA"
  }, 
  { 
    _id: "senderista",
    correo: "alXX@uji.es",
  nickname: "senderista",
  contrasenya: "senderista",
  fechaCreacion: "23/03/2021",
  descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  nombre: "Senderista",
  apellido: "Apellidos",
  fotoPerfil: "http://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg",
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
      fotoPerfil: "http://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg",
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
      fotoPerfil: "http://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg",
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
    fotoPerfil: "http://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg",
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
