import { Component } from '@angular/core';
import { Senderista } from './senderista';

@Component({
  selector: 'app-senderista',
  templateUrl: './senderista.component.html',
  styleUrls: ['./senderista.component.css']
})
export class SenderistaComponent implements Senderista {

  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  nickname: string;
  fechaCreacion: Date;
  descripcion: string;
  fotoPerfil: string;

  constructor() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    //this.fechaCreacion = dd + '/' + mm + '/' + yyyy;
    this.fechaCreacion = today
    this.nombre="Francis";
    this.apellido="Gutierrez"
  }
}
