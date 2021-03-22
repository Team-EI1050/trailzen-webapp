import { Component, OnInit } from '@angular/core';
import { SenderistaService } from '../senderista.service';
import { Routes, ActivatedRoute } from '@angular/router';
import { Senderista } from '../senderista';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  getId: any;
  senderista: Senderista;

  constructor(private activatedRoute: ActivatedRoute, 
    private senderistaService: SenderistaService) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.senderistaService.getSenderista(this.getId).subscribe(res => {
        this.senderista.id = this.getId,
        this.senderista.nombre = res['nombre'],
        this.senderista.apellido = res['apellido'],
        this.senderista.correo = res['correo'],
        this.senderista.descripcion = res['descripcion'],
        this.senderista.nickname = res['nickname'],
        this.senderista.contrasenya = res['contrasenya'],
        this.senderista.fechaCreacion = res['fechaCreacion'],
        this.senderista.fotoPerfil = res['fotoPerfil']
      })
    }

  

  ngOnInit(): void {
  }

  

}
