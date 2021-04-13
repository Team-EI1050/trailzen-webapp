import { Component, OnInit } from '@angular/core';
import { SenderistaService } from '../senderista.service';
import {  ActivatedRoute } from '@angular/router';
import { Senderista } from '../../modelos/senderista';

@Component({
  selector: 'app-perfilSenderista',
  templateUrl: './perfilSenderista.component.html',
  styleUrls: ['./perfilSenderista.component.css']
})
export class PerfilSenderistaComponent implements OnInit {

  getId: any;
  senderista: Senderista;

  constructor(private activatedRoute: ActivatedRoute, private senderistaService: SenderistaService) { }

  ngOnInit(): void {

    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Id:" + this.getId);
    this.senderistaService.getSenderista(this.getId).subscribe(res => {
      console.log("Res:" + res);
      this.senderista = res;
      console.log("senderista:" + this.senderista);
    })

  }

}