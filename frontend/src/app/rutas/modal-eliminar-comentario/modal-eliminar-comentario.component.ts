import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Ruta } from 'src/app/modelos/ruta';
import Swal from 'sweetalert2';
import { RutaService } from '../ruta.service';

@Component({
  selector: 'app-modal-eliminar-comentario',
  templateUrl: './modal-eliminar-comentario.component.html',
  styleUrls: ['./modal-eliminar-comentario.component.css']
})
export class ModalEliminarComentarioComponent implements OnInit {

  @Input() comentario: { nickname: String, comentario: String };
  @Input() rutaID: string;

  ruta: Ruta;
  comentarios: [ { nickname: String, comentario: String } ]

  constructor( private modalService: NgbModal, private rutaService: RutaService, private router: Router) { }

  ngOnInit(): void {
  }

  private getDismissReason(reason: any): string {
    this.rutaService.getRuta(this.ruta._id.toString()).subscribe(data => {
      this.ruta = data;
    });
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: Save`;
    }
  }

  getComentarioYElimina(){ 
    
    Swal.fire({
      title: '¿Seguro que desea eliminar este comentario?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Eliminar`,
      denyButtonText: `Cancelar`,
      focusDeny:true,
    }).then((result) => {
      /* Se confirma la operación */
      if (result.isConfirmed) {
        try {
          this.rutaService.getRuta(this.rutaID).subscribe( res => {
            this.ruta = res;
            console.log("Ruta: " + this.ruta.nombre)

          // se listan todos los comentarios
          for (var comment of this.ruta.comentarios) {
            console.log(comment.comentario)
          }

          this.eliminarComentario(this.comentario)
          
          // se listan todos los comentarios restantes
          for (var comment of this.ruta.comentarios) {
            console.log(comment.comentario)
          }

          this.rutaService.updateRuta(this.ruta).subscribe(res => {
            this.ruta = res;
          });

          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate([currentUrl]);
              console.log(currentUrl);
          });
          Swal.fire('Se ha eliminado el comentario', '', 'success');
          console.log('Eliminando comentario: ' + this.comentario.comentario);
          });
          
          
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido completar la operación!',
          })
        }

      } 
    })
  }

  eliminarComentario(comentario: { nickname: String, comentario: String }){
    let encontrado = false
    console.log('-----Ejecutando funcion')
    this.ruta.comentarios.forEach((valor, indice) => {
      if(valor.comentario == comentario.comentario && valor.nickname == comentario.nickname && encontrado == false) {
          console.log ('-----Encontrado')
          this.ruta.comentarios.splice(indice, 1)
          encontrado = true
      }
      console.log ('-----Recorriendo: ' + valor.comentario)
    })
  }
}
