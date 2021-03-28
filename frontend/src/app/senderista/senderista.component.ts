import { Component } from '@angular/core';
import { Senderista } from '../modelos/senderista';
import { SenderistaService } from './senderista.service'

@Component({
  selector: 'app-senderista',
  templateUrl: './senderista.component.html',
  styleUrls: ['./senderista.component.css']
})
export class SenderistaComponent {

  senderista: Senderista;

  constructor(private senderistaService: SenderistaService) {
    this.senderistaService.getSenderista("60605b3bff4ffd33c8e07b72").subscribe(res => {
      console.log("Res:" + res);
      this.senderista = res;
      console.log("senderista:" + this.senderista);
    })
  }
}
