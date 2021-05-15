import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from '../ruta.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  rutas: Ruta [];
  user: Iuser;
  searchTerm: string;
  term: string;

  distancia: number=20;
  valoracion: number;
  circular: boolean=false;
  miFormulario: FormGroup;
  todas: boolean=true;
  
  constructor(private rutaService: RutaService) {
   }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem("USER"));
    // console.log(this.user)

    this.rutaService.getRutas().subscribe(res => {
      // console.log("Res:" + res);
      this.rutas = res;
      // console.log("Rutas:" + this.rutas);
    })
  }


  

}
