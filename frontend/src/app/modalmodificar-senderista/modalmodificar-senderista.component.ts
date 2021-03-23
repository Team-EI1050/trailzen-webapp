import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalmodificar-senderista',
  templateUrl: './modalmodificar-senderista.component.html',
  styleUrls: ['./modalmodificar-senderista.component.css']
})
export class ModalmodificarSenderistaComponent {
  closeResult = '';

  @Input() id: number;
  @Input() nombre;
  @Input() apellido;
  @Input() nickname;
  @Input() descripcion;

  constructor(private modalService: NgbModal) {}
  
  
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
      return `with: ${reason}`;
    }
  }
  //---------------
  
}