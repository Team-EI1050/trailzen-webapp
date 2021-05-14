import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GestorService } from '../gestor.service';
import { ActivatedRoute } from '@angular/router';
import { Gestor } from '../../modelos/gestor';
import { Iuser } from 'src/app/modelos/Iuser';
import { Ruta } from 'src/app/modelos/ruta';
import { RutaService } from '../../rutas/ruta.service';

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
    private rutaService: RutaService
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
      console.log("###########");
      // console.log("Res: "+JSON.stringify(res));

      this.rutas = res;
      this.rutasValidadas = res;
      this.rutasSinValidar = res;
      
      console.log("1 RUTA -> "+res[0]._id);
      
      this.rutasValidadas.forEach(function (ruta) {
        console.log(" - - - - VALIDADAS - - - - ");
        // console.log("VALIDADAS | 2 RUTA -> "+ruta._id);
        // console.log("VALIDADAS | 3 RUTA aprobada -> "+ruta.aprobada);
        
        if ( ruta.aprobada === true) {
          console.log("VALIDADAS | APROBADA TRUE");
        } else if (ruta.aprobada !== true) {
          console.log("VALIDADAS | APROBADA NO TRUE");
          this.rutasValidadas = this.rutasValidadas.filter(obj => obj !== ruta);
        }

        // console.log("## VALIDADAS | 4 Ruta --> ");
        // Object.keys(ruta).forEach((prop)=> console.log("## VALIDADAS | "+prop +": " + ruta[prop]));
        // console.log("## VALIDADAS | Ruta.aprobada: "+ruta.aprobada+" | Ruta.viable: "+ruta.viable);
      });

      // this.rutasSinValidar.forEach(function (ruta) {
      //   console.log(" - - - - SIN VALIDAR - - - - ");
      //   // console.log("SIN VALIDAR | 2 RUTA -> "+ruta._id);
      //   // console.log("SIN VALIDAR | 3 RUTA -> "+ruta.aprobada);
        
      //   if ( ruta.aprobada === true) {
      //     console.log("SIN VALIDAR | APROBADA TRUE");
      //     this.rutasSinValidar = this.rutasSinValidar.filter(obj => obj !== ruta);
      //   } else if (ruta.aprobada !== true) {
      //     console.log("SIN VALIDAR | APROBADA NO TRUE");
      //   }

      //   // console.log("## SIN VALIDAR | 4 Ruta --> ");
      //   // Object.keys(ruta).forEach((prop)=> console.log("## SIN VALIDAR | "+prop +": " + ruta[prop]));
      //   // console.log("## SIN VALIDAR | Ruta.aprobada: "+ruta.aprobada+" | Ruta.viable: "+ruta.viable);
      // });

      console.log("5 RutasSinValidar --> "+this.rutasSinValidar);
      console.log("6 RutasValidadas --> "+this.rutasValidadas);

      
    });  
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
}