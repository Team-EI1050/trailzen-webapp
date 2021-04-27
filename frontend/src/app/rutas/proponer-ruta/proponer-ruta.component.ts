import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/common/login/user.service';
import { Iuser } from 'src/app/modelos/Iuser';
import { SenderistaService } from 'src/app/senderista/senderista.service';

@Component({
  selector: 'app-proponer-ruta',
  templateUrl: './proponer-ruta.component.html',
  styleUrls: ['./proponer-ruta.component.css']
})
export class ProponerRutaComponent implements OnInit {
  user:         Iuser;
  miFormulario: FormGroup;
  validos:      Boolean;
  data:         String;

  constructor(private userService: UserService, private senderistaService: SenderistaService) { 
    this.user = JSON.parse(localStorage.getItem("USER"));
    console.log(this.user);
    this.miFormulario = new FormGroup({ //atributos del formulario para el resgitro del senderista
      nombre:    new FormControl('', Validators.required),
      distancia: new FormControl('', Validators.required),
      puntoInico:  new FormControl('', Validators.required),
      puntoFin:  new FormControl('', Validators.required),
      circular:  new FormControl('', Validators.required),
      aprobada: new FormControl(true),
      viable: new FormControl(true),
      creador: new FormControl(this.user._id),
      descripcion: new FormControl('', Validators.required),

    });
    this.validos = true; 
    this.data = "Uno de tus campos es incorrecto";
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

}

