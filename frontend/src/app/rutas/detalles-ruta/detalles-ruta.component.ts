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

  getId: any;
  ruta: Ruta

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
