
import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../../app/modelos/Iuser';
import { user } from '../../../app/modelos/user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id = '6075a29951822b2eb1f8f43c';
  user: Iuser;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  // Returns the id of the current user
  getUserId(): String {
    let us :Iuser = JSON.parse(localStorage.getItem("USER"));
    return us.nickname;
  }

  botonCerrarSesion(){
    Swal.fire({
      title: '¿Seguro que desea cerrar sesión?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Cerrar sesión`,
      denyButtonText: `Cancelar`,
      focusDeny:true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
            let us :Iuser = new user("", "", "USUARIO");
            localStorage.setItem("USER", JSON.stringify(us));
            this.router.navigate(['/ruta']);
            
            Swal.fire('Ha cerrado sesión', '', 'success');

            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                this.router.navigate(['/ruta']);
            });
            // Redirige a la main page

        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido completar la operación!',
          })
        }
      }
    });
  }

}
