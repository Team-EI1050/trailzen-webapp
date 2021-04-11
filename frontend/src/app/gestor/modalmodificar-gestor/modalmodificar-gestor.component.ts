import {Component, Input } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

import { Gestor } from '../../modelos/gestor'
import { GestorService } from '../gestor.service'

@Component({
  selector: 'app-modalmodificar-gestor',
  templateUrl: './modalmodificar-gestor.component.html',
  styleUrls: ['./modalmodificar-gestor.component.css']
})
export class ModalmodificarGestorComponent {
  closeResult = '';

  @Input() gestor: Gestor;

  constructor(private modalService: NgbModal, private gestorService: GestorService) { }

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
    let nNombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let nApellido = (<HTMLInputElement>document.getElementById("apellido")).value;
    let nNickname = (<HTMLInputElement>document.getElementById("nickname")).value;
    let nDescripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    let ok: boolean = true;

    if(nNombre==""){
      Swal.fire( {
        icon: 'error',
        title: 'Oops...',
        confirmButtonColor: "#F99721",
        text: "El nombre no puede quedarse vacío"
      });
      ok=false;
    }
    if(nApellido==""){
      Swal.fire( {
          icon: 'error',
          title: 'Oops...',
          confirmButtonColor: "#F99721",
          text: "Debe introducir al menos un apellido"
      });
      ok=false;
    }
    if(nNickname==""){
      Swal.fire( {
        icon: 'error',
        title: 'Oops...',
        confirmButtonColor: "#F99721",
        text: "No puede eliminar su nombre de usuario"
      });
      ok=false;
    }
    if(ok){
      this.gestor.nombre = nNombre;
      this.gestor.apellido = nApellido;
      this.gestor.nickname = nNickname;
      this.gestor.descripcion = nDescripcion;

      this.gestorService.updateGestor(this.gestor).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Yaih!',
          text: "Perfil actualizado correctamente!",
          showConfirmButton: false,
          toast: true,
          timer: 1500,
          timerProgressBar: true
        });
      });
    }
  }
}