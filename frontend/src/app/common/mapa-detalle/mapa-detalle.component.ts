import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Ruta } from 'src/app/modelos/ruta';

@Component({
  selector: 'app-mapa-detalle',
  templateUrl: './mapa-detalle.component.html',
  styleUrls: ['./mapa-detalle.component.css']
})
export class MapaDetalleComponent implements OnInit, AfterViewInit {

  private mapa;
  @Input() ruta: Ruta;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.mapa = L.map("map", {
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.mapa);

    let coord = []; //gracias
    coord = this.ruta.coordenadas; //a ti tambien --> valor por referencia rules :)

    var polygon = L.polyline(coord, { color: '#004789', fillOpacity: 0 }).addTo(this.mapa); //tambien queda bien #008987
    this.mapa.fitBounds(polygon.getBounds());
  }

  actualizaMapa(): void {
    if(this.mapa != undefined) {
      console.log("Se me llama OnChanges")
      var polygon = L.polyline(this.ruta.coordenadas, { color: '#004789', fillOpacity: 0 }).addTo(this.mapa); //tambien queda bien #008987
      this.mapa.fitBounds(polygon.getBounds());
    }
  }
}
