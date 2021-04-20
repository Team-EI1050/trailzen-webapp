import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  constructor() { }

  // constructor(private userService: UserService, private senderistaService: SenderistaService) { 
  //   this.miFormulario = new FormGroup({ //atributos del formulario para el resgitro del senderista
  //     nombre:    new FormControl('', Validators.required),
  //     distancia: new FormControl('', Validators.required),
  //     puntoInico:  new FormControl('', Validators.required),
  //     puntoFin:  new FormControl('', Validators.required),
  //     circular:  new FormControl('', Validators.required),
  //     aprobada: new FormControl(''),
  //     fotos: new FormControl('¡Soy un nuevo senderista!'),
  //     fotoPerfil: new FormControl('')
  //   });
  //   this.validos = true; 
  //   this.data = "Uno de tus campos es incorrecto";
  // }

  ngOnInit() {
  }

}
