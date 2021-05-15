import { Component, Input, OnInit } from '@angular/core';
import { Ruta } from 'src/app/modelos/ruta';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {

  @Input('ruta') ruta: Ruta;
  @Input('url') url : String;

  constructor() { }

  ngOnInit(): void {
  }

}
