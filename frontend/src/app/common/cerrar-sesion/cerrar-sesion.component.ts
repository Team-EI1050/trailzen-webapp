import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/modelos/Iuser';
import { user } from 'src/app/modelos/user';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  user: Iuser;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  cerrarSesion() {
    let us :Iuser = new user("", "", "USUARIO");
    localStorage.setItem("USER", JSON.stringify(us));
  }

}
