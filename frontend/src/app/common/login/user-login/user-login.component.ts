
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/modelos/Iuser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:         Iuser;
  validos:      Boolean;
  data:         String;
  miFormulario: FormGroup;


  constructor( private userService: UserService, private router: Router ) { 
    this.validos = true; 
    this.data = "Usuario o contraseña incorrecta";
    this.miFormulario = new FormGroup({
      nickname:  new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
      soyGestor: new FormControl('')
    });
  }

  // Cuando se accede a sesión se establece el usuario guardado en la sesión como user.
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  // Acción que se ejecuta cuando se pulsa el boton de aceptar.
  getUser(): void {

    let nickname  = this.miFormulario.controls['nickname'].value;
    let password  = this.miFormulario.controls['password'].value;
    let soyGestor = this.miFormulario.controls['soyGestor'].value;

    // Comprueba que los datos de entrada sean válidos.
    if (this.userService.validarDatos(nickname, password)) {

      // Trata de obtener el usuario introducido. 
      this.userService.obtenerUsuario(nickname, password, soyGestor).subscribe(res => {

        // Se trata de una respuesta correcta.
        if (res != null) {
          
          // La contraseña es válida.
          if (res.contrasenya == password) {
            this.user = res;
            localStorage.setItem("USER", JSON.stringify(this.user));
            this.router.navigate(['/']);
          
          // No se han encontrado datos válidos.
          } else { 
            console.log("datos ivalidos");
            this.validos = false;
            this.miFormulario.controls['nickname'].setValue("");
            this.miFormulario.controls['password'].setValue("");
          }
        } else {
          console.log("datos sin rellenar");
          this.validos = false;
          this.miFormulario.controls['nickname'].setValue("");
          this.miFormulario.controls['password'].setValue("");
        }
      });

    // El nickname o la contraseña no se han rellenado.
    } else {
      console.log("datos sin rellenar");
      this.validos = false;
      this.miFormulario.controls['nickname'].setValue("");
      this.miFormulario.controls['password'].setValue("");
    }
  }
}
