import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Senderista } from '../../modelos/senderista'
import { SenderistaService } from '../senderista.service'
import { Iuser } from 'src/app/modelos/Iuser';
import { user } from 'src/app/modelos/user';

@Component({
  selector: 'app-modal-eliminar-senderista',
  templateUrl: './modal-eliminar-senderista.component.html',
  styleUrls: ['./modal-eliminar-senderista.component.css']
})
export class ModalEliminarSenderistaComponent implements OnInit {
  closeResult = '';
  @Input() senderista: Senderista;

  constructor( 
    private modalService: NgbModal, 
    private senderistaService: SenderistaService,
    private router: Router ) { }

  ngOnInit(): void {
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


  getDatosYElimina(){  //toma los datos del modal y elimina el senderista.
    // this.senderistaService.deleteSenderista(this.senderista._id).subscribe();
    // console.log(this.senderista);
    Swal.fire({
      title: '¿Seguro que desea eliminar su perfil?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Eliminar`,
      denyButtonText: `Cancelar`,
      focusDeny:true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          this.senderistaService.deleteSenderista(this.senderista._id).subscribe( ()=> {
            Swal.fire('¡Se ha eliminado su perfil!', '', 'success');
            console.log('Eliminando perfil');
            this.cerrarSesion();
            
            // Hay que redirigir a la main page
          });
        
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido completar la operación!',
          })
        }

      } else if (result.isDenied) {
        Swal.fire('Su perfil sigue con nosotros', '', 'info')
        // console.log('Cancelado eliminar perfil');
      }
    })
  }

  cerrarSesion() {
    let us :Iuser = new user("", "", "USUARIO");
    localStorage.setItem("USER", JSON.stringify(us));
    this.router.navigate(['/']);
  }

}
