let Ruta = require('../model/Ruta');

const RUTAS = [
	{
		nombre: "Ruta de ejemplo 1", 
		distancia: 5,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  },

	{
		nombre: "Ruta de ejemplo 2", 
		distancia: 7,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  },

	{
		nombre: "Ruta de ejemplo 3", 
		distancia: 12,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  },

	{
		nombre: "Ruta de ejemplo 4", 
		distancia: 20,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  },

	{
		nombre: "Ruta de ejemplo 5", 
		distancia: 10,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  },

	{
		nombre: "Ruta de ejemplo 6", 
		distancia: 8,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  },

	{
		nombre: "Ruta de ejemplo 7", 
		distancia: 7.5,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  },

	{
		nombre: "Ruta de ejemplo 8", 
		distancia: 13,
		puntoInicio: "Punto de inicio 1",
		puntoFin: "Punto fin 23",
		circular: true,
		aprobada: true,
		fotos: [{nombre: "foto1", url: "dir/foto1"}, {nombre: "foto2", url: "dir/foto2"}],
		viable: true
  }
]

function addMock(){
	Ruta.countDocuments( function (err, count) {
		if (err){
			console.log("Error a la hora de contar documetnos en Ruta: " + err)
		}else{
			if(count == 0){
				RUTAS.forEach(obj => {
				ruta = new Ruta(obj)
				ruta.save().then(() => console.log("- Mock ruta " + obj.nombre + " añadido/a."));
			})
			}
		}
	  });
}

exports.addMock = addMock;
