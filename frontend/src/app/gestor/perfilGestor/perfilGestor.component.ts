import { Component, OnInit } from '@angular/core';
import { GestorService } from '../gestor.service';
import { ActivatedRoute } from '@angular/router';
import { Gestor } from '../../modelos/gestor';


@Component({
  selector: 'app-perfilGestor',
  templateUrl: './perfilGestor.component.html',
  styleUrls: ['./perfilGestor.component.css']
})
export class PerfilGestorComponent implements OnInit {

  getId: any;
  gestor: Gestor;


  constructor(private activatedRoute: ActivatedRoute, private gestorService: GestorService,
    ) { }

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id:" + this.getId);
    this.gestorService.getGestor(this.getId).subscribe(res => {
      console.log("Res:" + res);
      this.gestor = res;
      console.log("gestor:" + this.gestor.nombre);
    })
  }

}
