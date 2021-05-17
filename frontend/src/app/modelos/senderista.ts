import { Iuser } from "./Iuser";

export class Senderista implements Iuser{
  _id: String;
  correo: String;
  nickname: String;
  contrasenya: String;
  fechaCreacion: String;
  descripcion: String;
  nombre: String;
  apellido: String;
  fotoPerfil: String;
  tipo: String = "SENDERISTA";

  constructor(id: String, correo: String, nickname:String, contrasenya: String,
    fechaCreacion:String, descripcion:String, nombre: String, apellido: String,){
    this._id = id;
    this.correo=correo;
    this.nickname=nickname;
    this.contrasenya= contrasenya;
    this.fechaCreacion=fechaCreacion;
    this. descripcion= descripcion;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fotoPerfil = "http://cdn.benchmark.pl/uploads/article/72855/MODERNICON/4f91fb01300b74ba42dcf080665285f3f56bd4ff.jpg";
}
}


