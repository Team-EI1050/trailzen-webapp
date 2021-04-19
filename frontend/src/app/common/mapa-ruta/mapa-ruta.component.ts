import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-mapa-ruta',
  templateUrl: './mapa-ruta.component.html',
  styleUrls: ['./mapa-ruta.component.css']
})
export class MapaRutaComponent implements OnInit, AfterViewInit {

  private mapa;

  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
  }

  private initMap(): void {
    this.mapa = leaflet.map('map', {
      center: [ 40.401, -3.68 ],
      zoom: 3
    });

    const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.mapa);
  }

}
