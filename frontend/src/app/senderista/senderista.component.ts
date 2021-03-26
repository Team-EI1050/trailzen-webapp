import { Component } from '@angular/core';
import { Senderista } from '../../modelos/senderista';

@Component({
  selector: 'app-senderista',
  templateUrl: './senderista.component.html',
  styleUrls: ['./senderista.component.css']
})
export class SenderistaComponent {

  senderista: Senderista;

  constructor() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.senderista = {
      _id: 459,
      fechaCreacion: dd + '/' + mm + '/' + yyyy,
      nombre: "Francis",
      nickname: "Fry249",
      apellido: "Gutierrez Fernandez",
      descripcion: "Me encanta cazar mariposas en juernes"
    };
  }
}
