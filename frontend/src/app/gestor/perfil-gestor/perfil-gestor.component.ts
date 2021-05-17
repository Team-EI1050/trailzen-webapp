import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GestorService } from '../gestor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gestor } from '../../modelos/gestor';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from '../../rutas/ruta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-gestor',
  queries: {
    "tabsContentRef": new ViewChild("tabsContentRef")
  },
  templateUrl: './perfil-gestor.component.html',
  styleUrls: ['./perfil-gestor.component.css']
})
export class PerfilGestorComponent implements OnInit {

  getId: any;
  gestor: Gestor;
  user: Object; // test
  selectedTab: "misDatos" | "creacionRutas" | "validacionRutas";
  selectedTabInside: "one" | "two" | "three";
  tabsContentRef!: ElementRef;
  rutas: Ruta [];
  rutasSinValidar: Ruta [];
  rutasValidadas: Ruta [];


  constructor(
    private activatedRoute: ActivatedRoute, 
    private gestorService: GestorService,
    private rutaService: RutaService,
    private router: Router
    ) {
    this.selectedTab = 'misDatos';
    this.selectedTabInside = 'one';
  }

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id:" + this.getId);
    this.gestorService.getGestor(this.getId).subscribe(res => {
      this.gestor = res;
      this.user = res; // Se ha añadido para realizar test de pruebas.
      console.log("gestor con interfaz:" + this.user['nombre']);
      console.log("gestor:" + this.gestor.nombre.toString());
    });


    this.user = JSON.parse(localStorage.getItem("USER"));
    console.log("USER: "+this.user['nickname']);

    this.rutaService.getRutas().subscribe(res => {

      this.rutas = res;
      this.rutasValidadas = res;
      this.rutasSinValidar = res;
      
      // this.rutas.forEach(function (ruta) {
      //   console.log(" - - - - VALIDADAS - - - - ");
        
      //   if ( ruta.aprobada === true) {
      //     console.log("VALIDADAS | APROBADA TRUE -> "+ruta.nombre);
      //     this.rutasValidadas.push(ruta);
      //   } else if (ruta.aprobada !== true) {
      //     console.log("VALIDADAS | APROBADA NO TRUE -> "+ruta.nombre);
      //     this.rutasSinValidar.push(ruta);
      //   }
      // });
    });  

    // this.rutaService.getRutas().subscribe(res => {
    //   res.forEach(function (ruta) {
    //     if ( ruta.aprobada === true) {
    //       this.rutasValidadas.push(ruta);
    //     }
    //   });
    // }); 

    // this.rutaService.getRutas().subscribe(res => {
    //   res.forEach(function (ruta) {
    //     if (ruta.aprobada !== true) {
    //       this.rutasSinValidar.push(ruta);
    //     }
    //   });
    // }); 
  }

  habilitarBotonModificar(){
    (<HTMLInputElement> document.getElementById("botonModificar")).disabled = false;
  }
  deshabilitarBotonModificar(){
    (<HTMLInputElement> document.getElementById("botonModificar")).disabled = true;
  }
  

  public show( tab: "misDatos" | "creacionRutas" |"validacionRutas" ) : void {
		this.selectedTab = tab;
	}
  
  public showInside( tab: "one" | "two" | "three" ) : void {
		this.selectedTabInside = tab;
		this.scrollTabContentToTop();
	}

  private scrollTabContentToTop() : void {
		this.tabsContentRef.nativeElement.scrollTo( 0, 0 );
	}

  aprobarRuta(ruta: Ruta) {
    let aprobada = true;
    let viable = true;

    let nuevaRuta=new Ruta(
      ruta._id,
      ruta.nombre,
      ruta.distancia,
      ruta.coordenadas,
      ruta.circular,
      aprobada,
      viable,
      ruta.descripcion,
      ruta.dificultad,
      ruta.provincia,
      ruta.creador
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
        // window.location.reload();
        this.router.navigate(['/gestor/'+this.user['nickname']]);
      }, 3000);
    });
  }

  eliminarRuta(ruta: Ruta) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Esta acción no podrá ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, quiero borrarla!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rutaService.deleteRuta(ruta._id.toString()).subscribe(() => {
          Swal.fire(
            '¡Ruta eliminada!',
            'La ruta '+ruta.nombre+' ha sido eliminada.',
            'success'
          ).then(() => {
            // window.location.reload();
            this.router.navigate(['/gestor/'+this.user['nickname']]);
          });
        });
      }
    })

    
  }
}