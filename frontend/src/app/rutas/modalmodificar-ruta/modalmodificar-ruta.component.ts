import {Component, Input } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

import { Ruta } from '../../modelos/ruta'
import { RutaService } from '../ruta.service'

@Component({
  selector: 'app-modalmodificar-ruta',
  templateUrl: './modalmodificar-ruta.component.html',
  styleUrls: ['./modalmodificar-ruta.component.css']
})
export class ModalmodificarRutaComponent {
  closeResult = '';

  @Input() ruta: Ruta;

  constructor(private modalService: NgbModal, private rutaService: RutaService) {
  }

  //modal
  async open(content) {
    (<HTMLInputElement><unknown>document.getElementById("nav-poner-borroso")).style.filter = 'blur(5px)'; //pone borroso el navbar antes de abrir el modal
    //(<HTMLInputElement><unknown>document.getElementById("poner-borroso")).style.filter = 'blur(5px)'; //pone borroso el fondo antes de abrir el modal
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modal-basic-title', windowClass: "myCustomModalClass"}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    (<HTMLInputElement><unknown>document.getElementById("nav-poner-borroso")).style.filter = 'none'; //desactiva el blur del navbar
    //(<HTMLInputElement><unknown>document.getElementById("poner-borroso")).style.filter = 'none'; //desactiva el efecto de blur al salir del modal
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: Save`;
    }
  }
  //---------------

  getDatosYActualiza(){  //toma los datos del modal y actualiza el guta.
    let nNombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    let nDistancia = (<HTMLInputElement>document.getElementById("distancia")).value;

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
    if(Number(nDistancia) == NaN || Number(nDistancia) <= 0){
      Swal.fire( {
          icon: 'error',
          title: 'Oops...',
          confirmButtonColor: "#F99721",
          text: "La distancia debe ser mayor a 0"
      });
      ok=false;
    }
    if(this.ruta.coordenadas.length<2){
      Swal.fire( {
        icon: 'error',
        title: 'Oops...',
        confirmButtonColor: "#F99721",
        text: "Se necesita marcar la ruta sobre el mapa."
      });
      ok=false;
    }
    if(ok){
      this.ruta.nombre = nNombre;
      this.ruta.distancia = Number(nDistancia);

      this.rutaService.updateRuta(this.ruta).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Yaih!',
          text: "Ruta actualizada correctamente!",
          showConfirmButton: false,
          toast: true,
          timer: 2000,
          timerProgressBar: true
        });
      });
    }
  }
}