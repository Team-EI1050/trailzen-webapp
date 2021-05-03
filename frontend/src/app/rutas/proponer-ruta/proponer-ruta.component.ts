import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/login/user.service';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
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

  constructor(private userService: UserService, private senderistaService: SenderistaService, private rutaService,  private router: Router) { 
    this.user = JSON.parse(localStorage.getItem("USER"));
    console.log(this.user);
    this.miFormulario = new FormGroup({ //atributos del formulario para el resgitro del senderista
      nombre:    new FormControl('', Validators.required),
      distancia: new FormControl('', Validators.required),
      ruta: new FormControl(Validators.required),
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

  proponerRuta(){
      let id=(this.miFormulario.controls['nombre'].value);
      let nombre=(this.miFormulario.controls['nombre'].value);
      let distancia=(this.miFormulario.controls['distancia'].value);
      let ruta=(this.miFormulario.controls['ruta'].value);
      let aprobada=true;
      let viable= true;
      let circular=(this.miFormulario.controls['circular'].value);
      let descripcion=(this.miFormulario.controls['descripcion'].value);
      let creador=nombre;
      

      if (nombre == '' ||  distancia == '' ||  ruta.length < 3 || descripcion == ''){
        this.validos = false;
        this.miFormulario.controls['nombre'].setValue("");
        this.miFormulario.controls['distancia'].setValue("");
      }else{
        this.rutaService.getRuta(id).subscribe(res => {
          if (res==null){ //registra la nueva ruta
            let nuevaRuta=new Ruta(id,nombre,distancia,ruta,circular,aprobada, viable,descripcion,creador)
            this.rutaService.addRuta(nuevaRuta).subscribe(nuevo => {
              if(nuevaRuta==null) {
                console.log("Problema al crear la ruta");
              }
              else{
                console.log("Ruta registrada");
                this.router.navigate(['/']);
                
              }
            });
          }
          else { //si ya existe ese nickname, muestra un error y pone los campos a null
            this.validos = false;
              this.miFormulario.controls['nombre'].setValue("");
              this.miFormulario.controls['distancia'].setValue("");
          }
        });
      }  
    
  }

}


