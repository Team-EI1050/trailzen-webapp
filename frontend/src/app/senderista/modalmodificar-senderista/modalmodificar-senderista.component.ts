import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Senderista } from '../../modelos/senderista'
import { SenderistaService } from '../senderista.service'

@Component({
  selector: 'app-modalmodificar-senderista',
  templateUrl: './modalmodificar-senderista.component.html',
  styleUrls: ['./modalmodificar-senderista.component.css']
})
export class ModalmodificarSenderistaComponent {
  closeResult = '';

  @Input() senderista: Senderista;

  constructor(private modalService: NgbModal, private senderistaService: SenderistaService) {}

  //modal
  async open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: "myCustomModalClass"}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: Save`;
    }
  }
  //---------------

  getDatosYActualiza(){  //toma los datos del modal y actualiza el senderista.
    this.senderista.nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    this.senderista.apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    this.senderista.nickname = (<HTMLInputElement>document.getElementById("nickname")).value;
    this.senderista.descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;

    this.senderistaService.updateSenderista(this.senderista);
  }
}