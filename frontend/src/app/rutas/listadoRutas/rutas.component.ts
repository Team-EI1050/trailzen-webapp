import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from '../ruta.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  ruta: Ruta;

  constructor(private activatedRoute: ActivatedRoute, private rutaService: RutaService) { }

  ngOnInit() {

    // this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log("Id:" + this.getId);
    this.rutaService.getRuta('6083fd7a8f75f149bccbc228').subscribe(res => {
      this.ruta = res;
      console.log("Ruta:" + res);
    })


  }

}
