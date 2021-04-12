import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../modelos/Iuser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user:         Iuser;
  miFormulario: FormGroup;
  validos:      Boolean;
  data:         String;

  constructor() { 
    this.miFormulario = new FormGroup({ //atributos del formulario para el resgitro del senderista
      nombre:    new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo:  new FormControl('', Validators.required),
      nickname:  new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
      fechaCreacion: new FormControl(''),
      descripcion: new FormControl('¡Soy un nuevo senderista!'),
      fotoPerfil: new FormControl('')
    });
    this.validos = true; 
    this.data = "Usuario o contraseña incorrecta";
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  registrarse() { //TODO
    console.log(this.miFormulario.controls['nombre'].value);
    console.log(this.miFormulario.controls['apellidos'].value);
    console.log(this.miFormulario.controls['correo'].value);
    console.log(this.miFormulario.controls['nickname'].value);
    console.log(this.miFormulario.controls['password'].value);
    console.log(this.miFormulario.controls['fechaCreacion'].value);
    console.log(this.miFormulario.controls['descripcion'].value);
    console.log(this.miFormulario.controls['fotoPerfil'].value);
  }

}
