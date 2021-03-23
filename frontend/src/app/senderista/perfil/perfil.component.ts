import { Component, OnInit } from '@angular/core';
import { SenderistaService } from '../senderista.service';
import {  ActivatedRoute } from '@angular/router';
import { Senderista } from '../senderista';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  getId: any;
  senderista: Senderista;

  constructor(
      private activatedRoute: ActivatedRoute, 
      private senderistaService: SenderistaService) {
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.getId);
      // this.getId = '6058e454464fcf60641bcbc1';
      this.senderistaService.getSenderista(this.getId).subscribe(res => 
        this.senderista = res
      )
    }

  

  ngOnInit(): void {
  }

  

}
