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

  constructor(private modalService: NgbModal, private gutaService: RutaService) { }

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
    let nPuntoInicio = (<HTMLInputElement>document.getElementById("puntoInicio")).value;
    let nPuntoFin = (<HTMLInputElement>document.getElementById("puntoFin")).value;
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
    if(nPuntoInicio=="" || nPuntoFin==""){
      Swal.fire( {
        icon: 'error',
        title: 'Oops...',
        confirmButtonColor: "#F99721",
        text: "Se necesita un punto de inicio y fin"
      });
      ok=false;
    }
    if(ok){
      this.ruta.nombre = nNombre;
      this.ruta.distancia = Number(nDistancia);
      this.ruta.puntoInicio = nPuntoInicio;
      this.ruta.puntoFin = nPuntoFin;

      this.gutaService.updateRuta(this.ruta).subscribe(res => {
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