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

    let nNombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let nApellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    let nNickname = (<HTMLInputElement>document.getElementById("nickname")).value;
    let nDescripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    let ok: boolean = true;

    if(nNombre==""){
      alert("El nombre no puede quedarse vacío");
      ok=false;
    }
    if(nApellido==""){
      alert("Debe introducir al menos un apellido");
      ok=false;
    }
    if(nNickname==""){
      alert("No puede eliminar su nombre de usuario");
      ok=false;
    }
    if(ok){
      this.senderista.nombre = nNombre;
      this.senderista.apellido = nApellido;
      this.senderista.nickname = nNickname;
      this.senderista.descripcion = nDescripcion;

      this.senderistaService.updateSenderista(this.senderista).subscribe();
      return true;
    }
    return false;
  }
}