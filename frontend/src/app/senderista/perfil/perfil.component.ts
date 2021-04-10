import { Component, OnInit } from '@angular/core';
import { SenderistaService } from '../senderista.service';
import {  ActivatedRoute } from '@angular/router';
import { Senderista } from '../../modelos/senderista';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  getId: any;
  senderista: Senderista;
  // senderistas: Senderista[];

  constructor(
      private activatedRoute: ActivatedRoute, 
      private senderistaService: SenderistaService) {
        this.senderista = JSON.parse(localStorage.getItem("USER"));
    }

  

  ngOnInit(): void {
    // this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    //   console.log("Id:" + this.getId);
    //   this.senderistaService.getSenderista(this.getId).subscribe(res => {
    //     console.log("Res:" + res);
        // this.senderista = res;
        
      //   console.log("senderista:" + this.senderista);
      // })
    // this.senderistaService.getSenderistas().subscribe(res => {
    //   console.log(res);
    //   this.senderistas = res;
    // })
  }

  

}
