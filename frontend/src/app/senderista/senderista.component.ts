import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { SENDERISTA } from '../mock-senderista';

@Component({
  selector: 'app-senderista',
  templateUrl: './senderista.component.html',
  styleUrls: ['./senderista.component.css']
})
export class SenderistaComponent implements OnInit {

  senderista = SENDERISTA;

  constructor() { }

  ngOnInit(): void {
  }

}
