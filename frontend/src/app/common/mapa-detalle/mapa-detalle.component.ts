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

    this.mapa = L.map("mapaDetalle", {
      center: [ 40.401, -3.68 ],
      zoom: 6
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.mapa);

    let coord = []; //gracias
    coord = this.ruta.coordenadas; //a ti tambien --> valor por referencia rules :)

    var polygon = L.polyline(coord, { color: '#004789', fillOpacity: 0 }).addTo(this); //tambien queda bien #008987
    this.mapa.fitBounds(polygon.getBounds());
  }
}
