import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/login/user.service';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
import { SenderistaService } from 'src/app/senderista/senderista.service';
import { RutaService } from '../ruta.service';

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
  ruta: Ruta;

  constructor(private rutaService: RutaService,  private router: Router) { 
    this.ruta=new Ruta(null,null,null,null,null,null,null,null,null,null,null);
    this.user = JSON.parse(localStorage.getItem("USER"));
    console.log(this.user);
    this.miFormulario = new FormGroup({ //atributos del formulario para el resgitro del senderista
      nombre:    new FormControl('', Validators.required),
      distancia: new FormControl('', Validators.required),
      ruta: new FormControl(Validators.required),
      circular:  new FormControl(false),
      aprobada: new FormControl(false),
      viable: new FormControl(true),
      creador: new FormControl(this.user._id),
      descripcion: new FormControl('', Validators.required),
      dificultad: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required)
    });
    this.ruta.coordenadas=[{ lat: null , lon: null }];
    this.validos = true; 
    this.data = "Uno de tus campos es incorrecto";
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  proponerRuta(){
      let nombre=(this.miFormulario.controls['nombre'].value);
      let distancia=(this.miFormulario.controls['distancia'].value);
      let aprobada=true;
      let viable= null;
      let circular=(this.miFormulario.controls['circular'].value);
      let descripcion=(this.miFormulario.controls['descripcion'].value);
      let creador=nombre;
      let dificultad=(this.miFormulario.controls['dificultad'].value);
      let provincia=(this.miFormulario.controls['provincia'].value);    
      

      if (nombre == '' ||  distancia == '' ||  this.ruta.coordenadas.length < 3 || descripcion == ''){
        this.validos = false;
        this.miFormulario.controls['nombre'].setValue("");
        this.miFormulario.controls['distancia'].setValue("");
      }else{
        // this.rutaService.getRuta(id).subscribe(res => {
        //   if (res==null){ //registra la nueva ruta
            let nuevaRuta=new Ruta(null,nombre,distancia,this.ruta.coordenadas,circular,aprobada, viable,descripcion,dificultad,provincia,creador)
            this.rutaService.addRuta(nuevaRuta).subscribe(nuevo => {
              if(nuevaRuta==null) {
                console.log("Problema al crear la ruta");
              }
              else{
                console.log("Ruta registrada");
                this.router.navigate(['/']);
                
              }
            });
          // }
          // else { //si ya existe ese nickname, muestra un error y pone los campos a null
          //   this.validos = false;
          //     this.miFormulario.controls['nombre'].setValue("");
          //     this.miFormulario.controls['distancia'].setValue("");
          // }
        // });
      }  
    
  }

}


