export class Ruta {
  _id: String;
  nombre: String ;
  distancia: Number ;
  puntoInicio: String ;
  puntoFin: String ;
  circular: Boolean ;
  aprobada: Boolean ;
  fotos: [ { nombre: String , url: String } ];
  viable: Boolean 
  descripcion: String;
}