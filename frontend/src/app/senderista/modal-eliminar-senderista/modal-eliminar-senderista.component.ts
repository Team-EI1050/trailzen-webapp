import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Senderista } from '../../modelos/senderista'
import { SenderistaService } from '../senderista.service'
import { Iuser } from 'src/app/modelos/Iuser';
import { user } from 'src/app/modelos/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-eliminar-senderista',
  templateUrl: './modal-eliminar-senderista.component.html',
  styleUrls: ['./modal-eliminar-senderista.component.css']
})
export class ModalEliminarSenderistaComponent implements OnInit {
  closeResult = '';
  @Input() senderista: Senderista;

  constructor( 
    private senderistaService: SenderistaService, private router: Router) { }

  ngOnInit(): void {
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
            setTimeout(() => {
              this.router.navigate(['/ruta']);
            }, 2000);
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
