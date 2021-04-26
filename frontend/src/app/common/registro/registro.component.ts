import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../login/user.service';
import { Iuser } from '../../modelos/Iuser';
import { Senderista } from '../../modelos/senderista';
import { SenderistaService } from '../../senderista/senderista.service';

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

  constructor(private userService: UserService, private senderistaService: SenderistaService) { 
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
    this.data = "Uno de tus campos es incorrecto";
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  registrarse() { //TODO
    let nombre=(this.miFormulario.controls['nombre'].value);
    let apellido=(this.miFormulario.controls['apellidos'].value);
    let correo=(this.miFormulario.controls['correo'].value);
    let nickname=(this.miFormulario.controls['nickname'].value);
    let password=(this.miFormulario.controls['password'].value);
    // let fechaCreacion=Date.now;
    // console.log(fechaCreacion)
    let descripcion=(this.miFormulario.controls['descripcion'].value);
    let fotoPerfil=(this.miFormulario.controls['fotoPerfil'].value);
    
    this.userService.obtenerUsuario(nickname, password, false).subscribe(res => {
      if (res==null){ //registra el nuevo senderista
        let nuevoSenderista=new Senderista(nickname,correo,nickname,password,Date.now.toString(),descripcion,nombre,apellido)
        this.senderistaService.addSenderista(nuevoSenderista).subscribe(nuevo => {
          if(nuevo==null) {
            console.log("Problema en el registro");
          }
          else{
            this.user=nuevo;
            localStorage.setItem("USER", JSON.stringify(this.user));
            console.log("¡Te has logeado!");
            
          }
        });
      }
      else { //si ya existe ese nickname, muestra un error y pone los campos a null
        this.validos = false;
          this.miFormulario.controls['nickname'].setValue("");
          this.miFormulario.controls['password'].setValue("");
      }
      
    });
  }

}