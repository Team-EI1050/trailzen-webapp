import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Iuser } from 'src/app/modelos/Iuser';
import Swal from 'sweetalert2'

import { Ruta } from '../../modelos/ruta'
import { RutaService } from '../ruta.service'

@Component({
  selector: 'app-modalmodificar-ruta',
  templateUrl: './modalmodificar-ruta.component.html',
  styleUrls: ['./modalmodificar-ruta.component.css']
})
export class ModalmodificarRutaComponent{
  closeResult = '';

  user:         Iuser;
  miFormulario: FormGroup;
  validos:      Boolean;
  data:         String;


  @Input() ruta: Ruta;

  constructor(
    private modalService: NgbModal, 
    private rutaService: RutaService, 
    private router: Router)
    {

      this.user = JSON.parse(localStorage.getItem("USER"));

      console.log(this.user);
      this.miFormulario = new FormGroup({ //atributos del formulario para el resgitro del senderista
        nombre:    new FormControl('', Validators.required),
        distancia: new FormControl('', Validators.required),
        ruta: new FormControl(Validators.required),
        circular:  new FormControl(false),
        aprobada: new FormControl(false),
        viable: new FormControl(true),
        creador: new FormControl(this.user._id),
        descripcion: new FormControl('', Validators.required),
        dificultad: new FormControl('', Validators.required),
        provincia: new FormControl('', Validators.required)
      });
      this.ruta.coordenadas=[{ lat: null , lon: null }];
      this.validos = true; 
      this.data = "Uno de tus campos es incorrecto";
  }

  // ngOnInit() {
  //   this.user = JSON.parse(localStorage.getItem("USER"));
  // }

  //modal
  async open(content) {
    (<HTMLInputElement><unknown>document.getElementById("nav-poner-borroso")).style.filter = 'blur(5px)'; //pone borroso el navbar antes de abrir el modal
    //(<HTMLInputElement><unknown>document.getElementById("poner-borroso")).style.filter = 'blur(5px)'; //pone borroso el fondo antes de abrir el modal
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modal-basic-title', windowClass: "myCustomModalClass"}).result.then((result) => {
      (<HTMLInputElement><unknown>document.getElementById("nav-poner-borroso")).style.filter = 'none'; //desactiva el blur del navbar
      //(<HTMLInputElement><unknown>document.getElementById("poner-borroso")).style.filter = 'none'; //desactiva el efecto de blur al salir del modal
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
    if(Number(nDistancia) == NaN || Number(nDistancia) <= 0){
      Swal.fire( {
          icon: 'error',
          title: 'Oops...',
          confirmButtonColor: "#F99721",
          text: "La distancia debe ser mayor a 0"
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
      this.ruta.distancia = Number(nDistancia);
      this.ruta.circular = nCircular;

      if (nCircular){ //Si es circular, añade el punto de inicio como final para cerrar la ruta.
        this.ruta.coordenadas.push(this.ruta.coordenadas[0]);
      }

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