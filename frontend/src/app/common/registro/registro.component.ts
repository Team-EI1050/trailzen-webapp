import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../login/user.service';
import { Iuser } from '../../modelos/Iuser';
import { Senderista } from '../../modelos/senderista';
import { SenderistaService } from '../../senderista/senderista.service';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private senderistaService: SenderistaService, private router: Router ) { 
    this.miFormulario = new FormGroup({ //atributos del formulario para el resgitro del senderista
      nombre:    new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo:  new FormControl('', Validators.required),
      nickname:  new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
      fechaCreacion: new FormControl(''),
      descripcion: new FormControl('¡Soy un nuevo senderista!')
    });
    this.validos = true; 
    this.data = "Uno de tus campos es incorrecto";
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  registrarse() {
    let nombre=(this.miFormulario.controls['nombre'].value);
    let apellido=(this.miFormulario.controls['apellidos'].value);
    let correo=(this.miFormulario.controls['correo'].value);
    let nickname=(this.miFormulario.controls['nickname'].value);
    let password=(this.miFormulario.controls['password'].value);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let fechaCreacion = dd + '/' + mm + '/' + yyyy;
    // console.log(fechaCreacion)
    let descripcion=(this.miFormulario.controls['descripcion'].value);
    console
      // console.log(nombre);
      // console.log(apellido);
      // console.log(correo);
      // console.log(nickname);
      // console.log(password);
    //TODO comprobar los campos son distinto de null
    if (nombre == '' ||  apellido == '' ||  correo == '' || nickname == '' ||  password == ''){
      this.validos = false;
      this.miFormulario.controls['nickname'].setValue("");
      this.miFormulario.controls['password'].setValue("");
    }else{
      this.userService.obtenerUsuario(nickname).subscribe(res => {
        if (res==null){ //registra el nuevo senderista
          let nuevoSenderista=new Senderista(nickname,correo,nickname,password,fechaCreacion,descripcion,nombre,apellido)
          this.senderistaService.addSenderista(nuevoSenderista).subscribe(nuevo => {
            if(nuevo==null) {
              console.log("Problema en el registro");
            }
            else{
              this.user=nuevo;
              localStorage.setItem("USER", JSON.stringify(this.user));
              console.log("¡Te has logeado!");
              this.router.navigate(['/']);
              
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


}
