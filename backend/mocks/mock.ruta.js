let Ruta = require('../model/Ruta');

const RUTAS = [
	{
		nombre: "Paseo hasta el puerto de Borriana",
		distancia: 8,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [{ nombre: "foto1", url: "https://static.eldiario.es/clip/c96ba654-6164-41ae-a04a-ad4019b1dc0f_16-9-aspect-ratio_default_0.jpg" }, { nombre: "foto2", url: "https://static.eldiario.es/clip/49d8e61c-77f1-4736-bf86-1ce3994d7d98_16-9-aspect-ratio_default_0.jpg" }],
		dificultad: "Difícil",
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
		dificultad: "Media",
		viable: true,
		creador: "admin1",
		descripcion: "Situada al Norte, se trata de la Playa más extensa de Oropesa del Mar. Es una playa urbana de arena en la mayor parte de su extensión bordeada por grandes zonas ajardinadas y por edificios de apartamentos, hoteles y el balneario de la urbanización Marina d'Or. Entontrarás además la mayor concentración de campings de Oropesa del Mar. La playa es accesible y dispone de todos los equipamientos e infraestructuras para el desarrollo de deportes naúticos y disfrutar de un día al sol en un entorno repleto de actividades físicas.",
		valoracion: 3,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 1 }, { nickname: "miriam", valor: 3 }],
		comentarios: [{ nickname: "alberto", comentario: "Genial" }, { nickname: "senderista", comentario: "Demasiado marron" }, { nickname: "miriam", comentario: "Con mucho barro" }]
	},








	{
		nombre: "El salto de la novia y el mirador de la Noguerica de Cirat",
		distancia: 15,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,
		aprobada: true,
		fotos: [{ nombre: "Inicio del camino tras abandonar Cirat", url: "https://3enruta.com/wp-content/uploads/2021/03/IMG_20210221_100150.jpg" }, 
		{ nombre: "Antigua senda de herradura", url: "https://3enruta.com/wp-content/uploads/2021/03/IMG_20210221_100555.jpg" }, 
		{ nombre: "La senda va caracoleando para salvar el desnivel", url: "https://3enruta.com/wp-content/uploads/2021/03/IMG_20210221_101304.jpg" }],
		dificultad: "Fácil",
		viable: true,
		creador: "admin1",
		descripcion: "En nuestro caso nos dirigimos a Cirat desde Mislata (Valencia), desde donde nos separan unos 100 Km que recorreremos en aproximadamente 1,5 h Tomaremos la V-23 hasta las inmediaciones de Sagunto y desde allí por la A-23 (Autovía Mudejar) para abandonarla 70 Km más tarde en la salida 42 hacia CV-195, en dirección Jérica/Caudiel/Viver. Seguimos por la CV-195 hasta llegar a Montanejos y allí tras entrar a la población tomamos la CV-20 por el Este hasta llegar a Cirat. Si vais desde Castellón llegaréis directamente por la CV-20 en menos de 1 hora tras recorrer los 58 Km separan las 2 poblaciones.",
		valoracion: 2,
		valoraciones: [{ nickname: "alberto", valor: 3 }, { nickname: "senderista", valor: 5 }, { nickname: "miriam", valor: 3 }],
		comentarios: [{ nickname: "alberto", comentario: "Las he visto mejores" }, { nickname: "senderista", comentario: "Rocosa pero con buen camino" }, { nickname: "miriam", comentario: "No esta mal, pero sería interesante una mejor indicación" }]
	},






	{
		nombre: "Recorrido circular desde Xodos",
		distancia: 8.59,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: false,	
		aprobada: true,
		fotos: [{ nombre: "Vista de la montaña", url: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k4/1u/1u7987og3ajs664bxy9xjvinc3l98jgty-uhi26514339/0?width=3072&height=2304&crop=&q=70" },
		 { nombre: "Peñagolosa", url: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k5/d1/d1gvfapkp3yz1u69jczmh6ax3q764ee3-uhi31055470/0?width=3072&height=2304&crop=&q=70" },
		  { nombre: "Desfiladero", url: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k4/1q/1quz8b85bea3h13p90zg20wj3t3l98kpxm-uhi26514363/0?width=3072&height=2304&crop=&q=70" }],
		dificultad: "Fácil",
		viable: true,
		creador: "admin1",
		descripcion: "Recorrido por los montes de la comarca de l'Alcalaten para ascender a la solitaria Lloma Bernat desde la que se divisa gran parte de la provincia de Castellón gracias a su privilegiada situación en el centro de ésta. Comenzamos el recorrido aparcando en la parte alta de Xodos (1.050 m), en la zona del cementerio, para desandar unos metros y ya, saliendo el pueblo, tomar un camino, al principio hormigonado, que baja hacia la derecha. Seguimos este camino dejando el pueblo por encima de nuestras cabezas y llegamos a otro asfaltado que seguimos durante pocos metros para desviarnos a la izquierda hacia el fondo de un seco arroyo (980 m.). Seguimos un breve tramo de camino que pronto se transforma en senda . Vamos ascendiendo por esta senda, tomando como referencia un muro a la derecha, hasta que llegamos casi a la carretera y nos desviamos a la derecha junto a un poste de teléfonos de madera (1.030 m.).",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 5 }, { nickname: "miriam", valor: 2 }],
		comentarios: [{ nickname: "alberto", comentario: "Caminata difícil. Se requiere buena forma física." }, { nickname: "senderista", comentario: "Se requiere tener paso firme, calzado adecuado y experiencia en alta montaña." }, { nickname: "miriam", comentario: "Infestada de insectos" }]
	},



	{
		nombre: "Vista Costiera Recorrido circular desde Luz del Sur",
		distancia: 7.5,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: true,
		aprobada: true,
		fotos: [{ nombre: "Vista del recorrido", url: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k3/vo/votei5fyej7i1hutjx6tjp4zb353pi90q-uhi8464781/0?width=3072&height=2304&crop=&q=70" }, 
		{ nombre: "Vista de la playa", url: "https://www.oropesadelmarturismo.com/bd/imagenes/imagen151g.jpg" }, 
		{ nombre: "Playa 2", url: "https://www.oropesadelmarturismo.com/bd/imagenes/imagen150g.jpg" }],
		dificultad: "Fácil",
		viable: true,
		creador: "admin1",
		descripcion: "El senderismo es una actividad deportiva no competitiva que consiste en caminar siguiendo un itinerario determinado. Se acostumbra a realizar en senderos balizados y homologados por el organismo competente de cada país, pero también por sendas, caminos rurales y vías verdes sin homologar.",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 5 }, { nickname: "miriam", valor: 2 }],
		comentarios: [{ nickname: "alberto", comentario: "Caminata moderada." }, { nickname: "senderista", comentario: " Se requiere buena forma física." }, { nickname: "miriam", comentario: "Sendas de fácil acceso. Para todos los niveles." }]
	},





	{
		nombre: "Torre de la Corda – Via verde Benicassim",
		distancia: 12,
		coordenadas: [{ lat: 39.8835775110825, lon: -0.0854015350341797 }, { lat: 39.881404027632165, lon: -0.08634567260742189 }, { lat: 39.881194085241056, lon: -0.0860452651977539 }, { lat: 39.879992049763345, lon: -0.08586287498474121 }, { lat: 39.878859976536575, lon: -0.08698940277099611 }, { lat: 39.87844830891143, lon: -0.0867319107055664 }, { lat: 39.878036638815054, lon: -0.08653879165649415 }, { lat: 39.87778963557103, lon: -0.0859808921813965 }, { lat: 39.87681808084634, lon: -0.08505821228027345 }, { lat: 39.87653813879515, lon: -0.08477926254272462 }, { lat: 39.87629524697195, lon: -0.08496165275573732 }, { lat: 39.87527426854502, lon: -0.08570194244384767 }, { lat: 39.87393626977409, lon: -0.08711814880371095 }, { lat: 39.872314168569375, lon: -0.08703231811523439 }, { lat: 39.87093082353029, lon: -0.08510112762451173 }, { lat: 39.86915219605852, lon: -0.0830841064453125 }, { lat: 39.866171244757844, lon: -0.07973670959472658 }, { lat: 39.86459837018639, lon: -0.0769472122192383 }, { lat: 39.86353810062075, lon: -0.07501065731048584 }], //Array de coordenadas para dibujar la ruta
		circular: true,
		aprobada: true,
		fotos: [{ nombre: "Pulgar en la cámara", url: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k3/w0/w0y4uchtkj871itknlpnb8qxo314s8q96-uhi6614251/0?width=3072&height=2304&crop=&q=70" },
		 { nombre: "Direcciones", url: "https://d2exd72xrrp1s7.cloudfront.net/www/000/1k3/1k/1k5m7712hhlojf9kej5td1vax314s9gxv-uhi6614254/0?width=3072&height=2304&crop=&q=70" }],
		dificultad: "Difícil",
		viable: true,
		creador: "admin1",
		descripcion: "Caminata moderada. Se requiere buena forma física. Sendas accesibles en su mayoría. Se requiere tener paso firme. El punto de inicio de la Ruta Accesible con transporte público",
		valoracion: 4,
		valoraciones: [{ nickname: "alberto", valor: 5 }, { nickname: "senderista", valor: 5 }],
		comentarios: [{ nickname: "alberto", comentario: "No pagaria por ella" }]
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
