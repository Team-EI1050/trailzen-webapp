import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Gestor } from '../../modelos/gestor'
import { GestorService } from '../gestor.service'

@Component({
  selector: 'app-modalmodificar-gestor',
  templateUrl: './modalmodificar-gestor.component.html',
  styleUrls: ['./modalmodificar-gestor.component.css']
})
export class ModalmodificargestorComponent {
  closeResult = '';

  @Input() gestor: Gestor;

  constructor(private modalService: NgbModal, private gestorService: GestorService) {}

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

  getDatosYActualiza(){  //toma los datos del modal y actualiza el gestor.
    this.gestor.nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    this.gestor.apellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    this.gestor.nickname = (<HTMLInputElement>document.getElementById("nickname")).value;
    this.gestor.descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;

    this.gestorService.updateGestor(this.gestor).subscribe();
  }
}