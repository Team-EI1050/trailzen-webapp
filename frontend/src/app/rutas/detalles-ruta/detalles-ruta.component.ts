import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from '../ruta.service';

@Component({
  selector: 'app-detalles-ruta',
  templateUrl: './detalles-ruta.component.html',
  styleUrls: ['./detalles-ruta.component.css']
})
export class DetallesRutaComponent implements OnInit {

  user: Iuser;
  valoracion: { nickname: String, valor: Number };
  comentario: { nickname: String, comentario: String };
  currentRate;
  suma: number;
  getId: any;
  @Input() ruta;

  constructor(private activatedRoute: ActivatedRoute, private rutaService: RutaService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("USER"));

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id:" + this.getId);
    this.rutaService.getRuta(this.getId).subscribe(res => {
      console.log("Res:" + res);
      this.ruta = res;
      console.log("Ruta:" + this.ruta.nombre);
    })

  }

  crearOpinion() {
    this.valoracion = {nickname: "", valor: NaN}
    this.comentario = {nickname: "", comentario: ""}
    let valor = this.currentRate;
    console.log("Valor: " + valor)
    let coment = (<HTMLInputElement>document.getElementById("comentario")).value;
    console.log("Comentario: " + coment)

    if (valor != NaN) {
      this.valoracion.nickname = this.user.nickname;
      this.valoracion.valor = valor;
      this.ruta.valoraciones.push(this.valoracion);
      this.calcularValoracion()
    }

    if (coment != ""){
      this.comentario.nickname = this.user.nickname;
      this.comentario.comentario = coment;
      this.ruta.comentarios.push(this.comentario);
    }

    this.rutaService.updateRuta(this.ruta).subscribe(res => {
      this.rutaService.getRuta(this.getId).subscribe(res => {
        this.ruta = res;
      })
    });

  }

  calcularValoracion() {
    this.suma = 0;
    
    for (var valoracion of this.ruta.valoraciones) {
      var valor = valoracion.valor
      console.log("Valoracion: " + valoracion.valor)
      this.suma = Number(this.suma) + Number(valor)
      console.log("Suma: " + this.suma)
    }
    this.ruta.valoracion = (this.suma / this.ruta.valoraciones.length).toFixed(1)

    console.log(this.ruta.valoracion)
  }

}
