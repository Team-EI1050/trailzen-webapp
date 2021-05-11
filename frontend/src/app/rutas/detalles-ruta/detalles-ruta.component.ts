import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
import Swal from 'sweetalert2';
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

  constructor(private activatedRoute: ActivatedRoute, private rutaService: RutaService, private router: Router) { }

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

    if (valor != NaN || valor != undefined || valor != null) {
        this.valoracion.nickname = this.user.nickname;
        this.valoracion.valor = valor;
        this.calcularValoracion(this.valoracion)
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

  calcularValoracion(valoracion: {nickname: String, valor: Number}) {
    this.suma = 0;
    let previo = false;
    
    // Se recorren todas las valoraciones previas acumulando las puntuaciones, y si es del mismo usuario se sustituye por la nueva puntuación
    for (var rate of this.ruta.valoraciones) {
      if (rate.nickname == valoracion.nickname) {
        previo = true;
        rate.valor = valoracion.valor
        this.suma = Number(this.suma) + Number(rate.valor)
        console.log("Repetido - " + rate.nickname + ": " + rate.valor)
      } else {
        this.suma = Number(this.suma) + Number(rate.valor)
        console.log(rate.nickname + ": " + rate.valor)
      }
    }

    // Si el usuario no había valorado, se añade la puntuación y se acumula a la suma total
    if (previo == false) {
      this.ruta.valoraciones.push(valoracion);
      this.suma = Number(this.suma) + Number(valoracion.valor)
      console.log("Nuevo - " + valoracion.nickname + ": " + valoracion.valor)
    }

    // Se calcula la media de las valoraciones
    this.ruta.valoracion = (this.suma / this.ruta.valoraciones.length).toFixed(1)

  }

  aprobarRuta() {
    let aprobada = true;
    let viable = true;

    let nuevaRuta=new Ruta(
      this.ruta._id,
      this.ruta.nombre,
      this.ruta.distancia,
      this.ruta.coordenadas,
      this.ruta.circular,
      aprobada,
      viable,
      this.ruta.descripcion,
      this.ruta.dificultad,
      this.ruta.provincia,
      this.ruta.creador
    )
    
    this.rutaService.updateRuta(nuevaRuta).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Yaih!',
        text: "Ruta aprobada satisfactoriamente!",
        showConfirmButton: false,
        toast: true,
        timer: 3000,
        timerProgressBar: true
      });
      setTimeout(() => {
        this.router.navigate(['/gestor/'+this.user._id]);
      }, 3000);
    });
  }

}
