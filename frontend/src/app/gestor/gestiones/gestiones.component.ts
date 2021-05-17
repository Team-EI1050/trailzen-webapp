import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  
  constructor(private rutaService: RutaService, private router: Router) { }

  ngOnInit(): void {

    this.rutaService.getRutas().subscribe(res => {
      this.rutas = res;
    })

  }

  aceptar(){
    this.rutaSeleccionada.aprobada = true;
    this.rutaSeleccionada.viable = true;

    this.rutaService.updateRuta(this.rutaSeleccionada).subscribe(res => {
      this.rutaSeleccionada = res;
      });
      
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
          console.log(currentUrl);
    });
  }

  rechazar(){

    this.rutaService.deleteRuta(this.rutaSeleccionada._id.toString()).subscribe();

    let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
          console.log(currentUrl);
      });
  }

}
