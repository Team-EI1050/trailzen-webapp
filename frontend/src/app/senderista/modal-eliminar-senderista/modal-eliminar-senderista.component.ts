import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Senderista } from '../../modelos/senderista'
import { SenderistaService } from '../senderista.service'

@Component({
  selector: 'app-modal-eliminar-senderista',
  templateUrl: './modal-eliminar-senderista.component.html',
  styleUrls: ['./modal-eliminar-senderista.component.css']
})
export class ModalEliminarSenderistaComponent implements OnInit {
  closeResult = '';
  @Input() senderista: Senderista;

  constructor(private modalService: NgbModal, private senderistaService: SenderistaService) { }

  ngOnInit(): void {
  }


  //modal
  async open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', windowClass: "myCustomModalClass"}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log(this.closeResult);
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


  getDatosYElimina(){  //toma los datos del modal y elimina el senderista.
    // this.senderistaService.deleteSenderista(this.senderista._id).subscribe();
    console.log(this.senderista._id);
  }

}
