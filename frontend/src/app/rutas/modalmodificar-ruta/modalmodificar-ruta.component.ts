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

  constructor(private modalService: NgbModal, public rutaService: RutaService) {
  }

  //modal
  async open(content) {
    (<HTMLInputElement><unknown>document.getElementById("nav-poner-borroso")).style.filter = 'blur(5px)'; //pone borroso el navbar antes de abrir el modal
    (<HTMLInputElement><unknown>document.getElementById("poner-borroso")).style.filter = 'blur(5px)'; //pone borroso el fondo antes de abrir el modal
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modal-basic-title', windowClass: "myCustomModalClass"}).result.then((result) => {
      (<HTMLInputElement><unknown>document.getElementById("nav-poner-borroso")).style.filter = 'none'; //desactiva el blur del navbar
      (<HTMLInputElement><unknown>document.getElementById("poner-borroso")).style.filter = 'none'; //desactiva el efecto de blur al salir del modal
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    (<HTMLInputElement><unknown>document.getElementById("nav-poner-borroso")).style.filter = 'none'; //desactiva el blur del navbar
    (<HTMLInputElement><unknown>document.getElementById("poner-borroso")).style.filter = 'none'; //desactiva el efecto de blur al salir del modal
    this.rutaService.getRuta(this.ruta._id.toString()).subscribe(data => {
      this.ruta = data;
    });
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
    //let nDistancia = (<HTMLInputElement>document.getElementById("distancia")).value;
    let nCircular = Boolean((<HTMLInputElement>document.getElementById("circular")).checked);
    console.log("Circular? "+nCircular);

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
    if(this.ruta.coordenadas.length<3){
      Swal.fire( {
        icon: 'error',
        title: 'Oops...',
        confirmButtonColor: "#F99721",
        text: "Se necesitan marcar al menos 3 puntos de ruta sobre el mapa."
      });
      ok=false;
    }
    if(ok){

      this.ruta.nombre = nNombre;
      this.ruta.distancia = Number((Number(this.rutaService.contadorKm[0])/1000).toFixed(2)); //arte
      this.rutaService.contadorKm = new Array(1);
      this.ruta.circular = nCircular;

      if (nCircular){ //Si es circular, añade el punto de inicio como final para cerrar la ruta.
        this.ruta.coordenadas.push(this.ruta.coordenadas[0]);
      }

      this.rutaService.updateRuta(this.ruta).subscribe(res => {
        this.ruta = res;
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