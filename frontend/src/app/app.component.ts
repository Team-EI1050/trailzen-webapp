import { Component, Inject, Input } from '@angular/core';
import { Iuser } from './modelos/Iuser';
import { user } from './modelos/user';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nuser: Iuser = new user("nice nerson", "nice nerson", "USUARIO");
  public data:any=[]

  constructor(){
  }

  ngOnInit(): void {
    this.saveInSession("USER", this.nuser)
  }

  saveInSession(key, user: Iuser): void {
    localStorage.setItem(key, JSON.stringify(user));
   }

}
