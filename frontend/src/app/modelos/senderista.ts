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
    this.fotoPerfil = null;
}
}


