import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from 'src/app/rutas/ruta.service';

@Component({
  selector: 'app-gestiones',
  templateUrl: './gestiones.component.html',
  styleUrls: ['./gestiones.component.css']
})
export class GestionesComponent implements OnInit {

  rutas: Ruta [];
  rutaSeleccionada: Ruta;
  
  constructor(private rutaService: RutaService) { }

  ngOnInit(): void {

    this.rutaService.getRutas().subscribe(res => {
      this.rutas = res;
    })

  }

}
