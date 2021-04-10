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
}