import { Component, OnInit } from '@angular/core';
import { GestorService } from '../gestor.service';
import { ActivatedRoute } from '@angular/router';
import { Gestor } from '../../modelos/gestor';

@Component({
  selector: 'app-perfil-gestor',
  templateUrl: './perfil-gestor.component.html',
  styleUrls: ['./perfil-gestor.component.css']
})
export class PerfilGestorComponent implements OnInit {

  getId: any;
  gestor: Gestor;


  constructor(private activatedRoute: ActivatedRoute, private gestorService: GestorService,
    ) { }

  ngOnInit(): void {
    // this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log("Id:" + this.getId);
    // this.gestorService.getGestor(this.getId).subscribe(res => {
    //   console.log("Res:" + res);
    //   this.gestor = res;
    //   console.log("gestor:" + this.gestor.nombre);
    // })
    this.getId="123";
    this.gestor={
      _id:"123",
      nombre:"alberto",
      nickname:"albertus3000",
      correo:"albertodkjf@gmail.com",
      apellido: "String",
      contrasenya: "String",
      fechaCreacion: "String",
      descripcion: "String",
      dni: "String"
    }
  }
  habilitarBotonModificar(){
    (<HTMLInputElement> document.getElementById("botonModificar")).disabled = false;
  }
  deshabilitarBotonModificar(){
    (<HTMLInputElement> document.getElementById("botonModificar")).disabled = true;
  }
}