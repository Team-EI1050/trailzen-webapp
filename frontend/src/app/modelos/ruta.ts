export class Ruta {
  _id: String;
  nombre: String ;
  distancia: Number;
  coordenadas: { lat: Number , lon: Number } [];
  circular: Boolean ;
  aprobada: Boolean ;
  fotos: [ { nombre: String , url: String } ];
  viable: Boolean ;
  creador: String;
  descripcion: String;
  valoracion: Number;
  comentarios: [ { nickname: String, comentario: String } ];
  dificultad: String;
  provincia: String;
  valoraciones: [ {valoracion: Number, nickname: String} ] 

  constructor(id: String, nombre: String, distancia:Number, coordenadas: { lat: Number , lon: Number } [],
    circular:Boolean, aprobada: Boolean, viable:Boolean, descripcion:String, dificultad: String, provincia:String, creador: String){
    this._id = id;
    this.nombre=nombre;
    this.distancia=distancia;
    this.coordenadas= coordenadas;
    this.circular=circular;
    this. aprobada= aprobada;
    this.fotos=null;
    this.viable = viable;
    this.descripcion = descripcion;
    this.dificultad = dificultad;
    this.provincia = provincia;
    this.creador = creador;
    this.valoraciones=null;
  }
}