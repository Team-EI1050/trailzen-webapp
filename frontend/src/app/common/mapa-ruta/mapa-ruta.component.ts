import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from 'src/app/rutas/ruta.service';

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
export class MapaRutaComponent implements OnInit, AfterViewInit, OnDestroy {

  private mapa;
  public coordenadasRuta = new Array<{ lat: Number , lon: Number }>();
  @Input() ruta: Ruta;
  public auxDistancia: Number[] = new Array(1);

  constructor(public rutaService: RutaService, private router: Router) { }

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
    console.log("hasta aqui")

    tiles.addTo(this.mapa);

    let contador = [];
    let coord = []; //gracias 
    coord = this.coordenadasRuta; //a ti tambien --> valor por referencia rules :)
    contador = this.auxDistancia;

    this.mapa.on('click', onMapClick);

    function onMapClick(e) {
      if(coord.length == 1){
        contador[0]=0;
      }
      if(coord.length>0){
        contador[0] = (contador[0] += this.distance(coord[coord.length-1], e.latlng));
      }
      coord.push({lat: e.latlng.lat, lon: e.latlng.lng });
      console.log("Variable coor: " ,coord, "Variable contador: ",contador);

      if(coord.length>1){
        var polygon = L.polyline(coord, { color: '#004789', fillOpacity: 0 }).addTo(this); //tambien queda bien #008987
        this.fitBounds(polygon.getBounds());
      }
    }
  }

  ngOnInit(): void {
    if(this.ruta._id != null){
      document.getElementById("map").setAttribute("id", "mapoff");
    }
    //this.auxDistancia[0] = this.ruta.distancia;
    this.ruta.coordenadas = this.coordenadasRuta;
    this.rutaService.contadorKm = this.auxDistancia;
  }
  ngOnDestroy(): void{
    if(this.ruta._id != null){
      document.getElementById("mapoff").setAttribute("id", "map");
    }
    console.log("Exploto ",this.auxDistancia);
    if(document.getElementById("mapoff") != null){
      document.getElementById("mapoff").setAttribute("id", "map");
    }

    let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
          console.log(currentUrl);
      });
  }
}