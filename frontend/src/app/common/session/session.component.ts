import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Iuser } from 'src/app/modelos/Iuser';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  @Input() user: Iuser;
  
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }
}
