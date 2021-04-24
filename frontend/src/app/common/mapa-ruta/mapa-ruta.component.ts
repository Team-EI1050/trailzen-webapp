import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Ruta } from 'src/app/modelos/ruta';


const iconRetinaUrl = './assets/marker-icon-2x.png';
const iconUrl = './assets/marker-icon.png';
const shadowUrl = './assets/marker-shadow.png';
const iconDefault = L.icon({
iconRetinaUrl,
iconUrl,
shadowUrl,
iconSize: [25, 41],
iconAnchor: [12, 41],
popupAnchor: [1, -34],
tooltipAnchor: [16, -28],
shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-mapa-ruta',
  templateUrl: './mapa-ruta.component.html',
  styleUrls: ['./mapa-ruta.component.css']
})
export class MapaRutaComponent implements OnInit, AfterViewInit {

  private mapa;
  public coordenadasRuta = new Array<{ lat: Number , lon: Number }>();
  @Input() ruta: Ruta;

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = L.map("map", {
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
    coord = this.coordenadasRuta; //a ti tambien --> valor por referencia rules :)

    this.mapa.on('click', onMapClick);

    function onMapClick(e) {
      coord.push({lat: e.latlng.lat, lon: e.latlng.lng });
      console.log("Variable coor: " +coord);

      if(coord.length>1){
        var polygon = L.polyline(coord, { color: '#004789', fillOpacity: 0 }).addTo(this); //tambien queda bien #008987
        this.fitBounds(polygon.getBounds());
      }
    }
  }

  ngOnInit(): void {
    console.log(this.ruta.coordenadas);
    this.ruta.coordenadas=this.coordenadasRuta;
  }
  ngOnDestroy(): void{
    console.log("Array bueno FINAL: "+this.ruta.coordenadas)
  }

  mostrarCoordenadas(){
    console.log("Array bueno: "+this.coordenadasRuta);
    // var latlngs = [[37, -109.05], [41, -109.03], [41, -102.05], [37, -102.04]];
    // var polygon = L.polygon(this.coordenadasRuta, { color: 'red', fillOpacity: 0 }).addTo(this.mapa);
    // // zoom the map to the polygon
    // if(this.coordenadasRuta.length>1){
    //   this.mapa.fitBounds(polygon.getBounds());
    // }
  }
}