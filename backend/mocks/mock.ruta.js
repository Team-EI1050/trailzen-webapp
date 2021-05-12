let Ruta = require('../model/Ruta');

const RUTAS = [
	{
		nombre: "Paseo hasta el puerto de Borriana",
		distancia: 8,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [{ nombre: "foto1", url: "https://image.shutterstock.com/image-photo/couple-young-happy-travelers-hiking-600w-1079578931.jpg" }, { nombre: "foto2", url: "https://image.shutterstock.com/image-photo/couple-young-happy-travelers-hiking-600w-1079578931.jpg" }, { nombre: "foto3", url: "https://image.shutterstock.com/image-photo/couple-young-happy-travelers-hiking-600w-1079578931.jpg" }, { nombre: "foto4", url: "https://image.shutterstock.com/image-photo/couple-young-happy-travelers-hiking-600w-1079578931.jpg" }],
		viable: true,
		creador: "alberto",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 4 }, { nickname: "miriam", valor: 3 }],
		comentarios: [{ nickname: "alberto", comentario: "Genial" }, { nickname: "senderista", comentario: "Muy bonita" }, { nickname: "miriam", comentario: "Con mucho barro" }, { nickname: "alberto", comentario: "Buenas vistas" }]
	},
	{
		nombre: "Paseo por la playa de les Amplaries",
		distancia: 10,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [{ nombre: "Orilla en Oropesa", url: "https://www.oropesadelmarturismo.com/bd/imagenes/imagen152g.jpg" }, { nombre: "Playa", url: "https://www.oropesadelmarturismo.com/bd/imagenes/imagen151g.jpg" }, { nombre: "Playa 2", url: "https://www.oropesadelmarturismo.com/bd/imagenes/imagen150g.jpg" }],
		viable: true,
		creador: "admin1",
		descripcion: "Situada al Norte, se trata de la Playa más extensa de Oropesa del Mar. Es una playa urbana de arena en la mayor parte de su extensión bordeada por grandes zonas ajardinadas y por edificios de apartamentos, hoteles y el balneario de la urbanización Marina d'Or. Entontrarás además la mayor concentración de campings de Oropesa del Mar. La playa es accesible y dispone de todos los equipamientos e infraestructuras para el desarrollo de deportes naúticos y disfrutar de un día al sol en un entorno repleto de actividades físicas.",
		valoracion: 3,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 1 }, { nickname: "miriam", valor: 3 }],
		comentarios: [{ nickname: "alberto", comentario: "Genial" }, { nickname: "senderista", comentario: "Demasiado marron" }, { nickname: "miriam", comentario: "Con mucho barro" }]
	},
	{
		nombre: "Ruta ejemplo 2",
		distancia: 15,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [],
		viable: true,
		creador: "admin1",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		valoracion: 2,
		valoraciones: [{ nickname: "alberto", valor: 2 }, { nickname: "senderista", valor: 1 }, { nickname: "miriam", valor: 3 }],
		comentarios: [{ nickname: "alberto", comentario: "Las he visto mejores" }, { nickname: "senderista", comentario: "Rocosa" }, { nickname: "miriam", comentario: "No esta mal" }]
	},
	{
		nombre: "Ruta ejemplo 3",
		distancia: 4.5,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [],
		viable: true,
		creador: "admin1",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 5 }, { nickname: "miriam", valor: 2 }],
		comentarios: [{ nickname: "alberto", comentario: "No pagaria por ella" }, { nickname: "senderista", comentario: "Con demasiada agua" }, { nickname: "miriam", comentario: "Infestada de insectos" }]
	},
	{
		nombre: "Ruta ejemplo 4",
		distancia: 7.5,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [],
		viable: true,
		creador: "admin1",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 5 }, { nickname: "miriam", valor: 2 }],
		comentarios: [{ nickname: "alberto", comentario: "No pagaria por ella" }, { nickname: "senderista", comentario: "Con demasiada agua" }, { nickname: "miriam", comentario: "Infestada de insectos" }]
	},
	{
		nombre: "Ruta ejemplo 5",
		distancia: 12,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [],
		viable: true,
		creador: "admin1",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 5 }, { nickname: "miriam", valor: 2 }],
		comentarios: [{ nickname: "alberto", comentario: "No pagaria por ella" }, { nickname: "senderista", comentario: "Con demasiada agua" }, { nickname: "miriam", comentario: "Infestada de insectos" }]
	},
	{
		nombre: "Ruta ejemplo 6",
		distancia: 20,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [],
		viable: true,
		creador: "admin1",
		descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 5 }, { nickname: "miriam", valor: 2 }],
		comentarios: [{ nickname: "alberto", comentario: "No pagaria por ella" }, { nickname: "senderista", comentario: "Con demasiada agua" }, { nickname: "miriam", comentario: "Infestada de insectos" }]
	}
]


function addMock() {
	Ruta.countDocuments(function (err, count) {
		if (err) {
			console.log("Error a la hora de contar documentos en Ruta: " + err)
		} else {
			if (count == 0) {
				RUTAS.forEach(obj => {
					ruta = new Ruta(obj)
					ruta.save().then(() => console.log("- Mock ruta " + obj.nombre + " añadido/a."));
				})
			}
		}
	});
}

exports.addMock = addMock;
