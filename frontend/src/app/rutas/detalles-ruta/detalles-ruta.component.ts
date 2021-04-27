import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from '../ruta.service';

@Component({
  selector: 'app-detalles-ruta',
  templateUrl: './detalles-ruta.component.html',
  styleUrls: ['./detalles-ruta.component.css']
})
export class DetallesRutaComponent implements OnInit {

  user: Iuser;

  getId: any;
  ruta: Ruta

  constructor(private activatedRoute: ActivatedRoute, private rutaService: RutaService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("USER"));

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id:" + this.getId);
    this.rutaService.getRuta(this.getId).subscribe(res => {
      console.log("Res:" + res);
      this.ruta = res;
      console.log("Ruta:" + this.ruta.nombre);
    })

  }

}
