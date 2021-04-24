let Ruta = require('../model/Ruta');

const RUTAS = [
    {
        nombre: "Paseo hasta el puerto de Borriana", 
        distancia: 8,
        coordenadas: [ {lat:39.8835775110825,lon:-0.0854015350341797},{lat:39.881404027632165,lon:-0.08634567260742189},{lat:39.881194085241056,lon:-0.0860452651977539},{lat:39.879992049763345,lon:-0.08586287498474121},{lat:39.878859976536575,lon:-0.08698940277099611},{lat:39.87844830891143,lon:-0.0867319107055664},{lat:39.878036638815054,lon:-0.08653879165649415},{lat:39.87778963557103,lon:-0.0859808921813965},{lat:39.87681808084634,lon:-0.08505821228027345},{lat:39.87653813879515,lon:-0.08477926254272462},{lat:39.87629524697195,lon:-0.08496165275573732},{lat:39.87527426854502,lon:-0.08570194244384767},{lat:39.87393626977409,lon:-0.08711814880371095},{lat:39.872314168569375,lon:-0.08703231811523439},{lat:39.87093082353029,lon:-0.08510112762451173},{lat:39.86915219605852,lon:-0.0830841064453125},{lat:39.866171244757844,lon:-0.07973670959472658},{lat:39.86459837018639,lon:-0.0769472122192383},{lat:39.86353810062075,lon:-0.07501065731048584} ], //Array de coordenadas para dibujar la ruta
        circular: false,
        aprobada: true,
        fotos: [],
        viable: true,
        valoraciones: [ {valoracion: 4, nickname:"alberto"}, {valoracion: 3, nickname:"miriam"} ] //Valorar una ruta
  }
]


function addMock(){
    Ruta.countDocuments( function (err, count) {
        if (err){
            console.log("Error a la hora de contar documentos en Ruta: " + err)
        }else{
            if(count == 0){
                RUTAS.forEach(obj => {
                ruta = new Ruta(obj)
                ruta.save().then(() => console.log("- Mock ruta " + obj.nickname + " añadido/a."));
            })
            }
        }
      });
}

exports.addMock = addMock;
