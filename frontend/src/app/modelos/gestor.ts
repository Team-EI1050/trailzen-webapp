import { Iuser } from "./Iuser";

export class Gestor implements Iuser{
  _id: String;
  correo: String ;
  nickname: String ;
  nombre: String ;
  apellido: String ;
  contrasenya: String ;
  fechaCreacion: String ;
  descripcion: String ;
  dni: String ;
  tipo: String = "GESTOR";
}