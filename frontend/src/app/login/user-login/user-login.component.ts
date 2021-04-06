
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/modelos/Iuser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: Iuser // Usuario activo
  validos: Boolean = true;
  data: String = "Introduce valid data";

  miFormulario = new FormGroup({
    nickname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  constructor(private userService: UserService) { }

  // Cuando se inicia establece el usuario guardado en la sesión como el actual.
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  // Acción que se ejecuta cuando se pulsa el boton de aceptar.
  getUser(): void {
    let nickname = this.miFormulario.controls['nickname'].value;
    let password = this.miFormulario.controls['password'].value;


    this.validos = this.userService.validarDatos(nickname, password);

    if (this.validos) {

      this.userService.obtenerUsuario(nickname, password).subscribe(res => {
        if (res != null) {
          console.log("se trata de un dato válido");
          if (res.contrasenya == password) {
            console.log("contraseña válida");
            console.log("Usuario reconocido");
            this.user = res;
            localStorage.setItem("USER", JSON.stringify(this.user));
          } else {
            this.miFormulario.controls['password'].setValue("");
            this.validos = false;
          }

        }
        else { // No se han encontrado datos válidos.
          this.validos = false;
          this.miFormulario.controls['nickname'].setValue("");
          this.miFormulario.controls['password'].setValue("");
        }

      });
    } else { // El nickname o la contraseña no se han rellenado.
      this.validos = false;
      this.miFormulario.controls['nickname'].setValue("");
      this.miFormulario.controls['password'].setValue("");
    }
  }
}
