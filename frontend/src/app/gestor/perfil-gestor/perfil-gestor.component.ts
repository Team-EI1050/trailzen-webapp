import { Component, OnInit } from '@angular/core';
import { GestorService } from '../gestor.service';
import { ActivatedRoute } from '@angular/router';
import { Gestor } from '../../modelos/gestor';
import { Iuser } from 'src/app/modelos/Iuser';

@Component({
  selector: 'app-perfil-gestor',
  templateUrl: './perfil-gestor.component.html',
  styleUrls: ['./perfil-gestor.component.css']
})
export class PerfilGestorComponent implements OnInit {

  getId: any;
  gestor: Gestor;
  user: Object; // test


  constructor(private activatedRoute: ActivatedRoute, private gestorService: GestorService,
    ) { }

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id:" + this.getId);
    this.gestorService.getGestor(this.getId).subscribe(res => {
      console.log("Res:" + res);
      this.gestor = res;
      this.user = res; // Se ha añadido para realizar test de pruebas.
      console.log("gestor con interfaz:" + this.user['nombre']);
      console.log("gestor:" + this.gestor.nombre.toString());
    })
    
  }
  habilitarBotonModificar(){
    (<HTMLInputElement> document.getElementById("botonModificar")).disabled = false;
  }
  deshabilitarBotonModificar(){
    (<HTMLInputElement> document.getElementById("botonModificar")).disabled = true;
  }
}