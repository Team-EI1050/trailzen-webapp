export class Ruta {
  _id: String;
  nombre: String ;
  distancia: Number ;
  coordenadas: { lat: Number , lon: Number } [];
  circular: Boolean ;
  aprobada: Boolean ;
  fotos: [ { nombre: String , url: String } ];
  viable: Boolean ;
  creador: String;
  descripcion: String;
  valoraciones: [ {valoracion: Number, nickname: String} ] 
}