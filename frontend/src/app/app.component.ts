import { Component } from '@angular/core';
import { Iuser } from './modelos/Iuser';
import { user } from './modelos/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  id = '6074501d3682bd337865596f';
  // title = 'TrailZen';
  
  
  // public data:any=[]
  // user: Iuser = new user("Alberto", "Alberto", "USUARIO")

  constructor(){
  }

  ngOnInit(): void {

    // this.saveInSession("USER", this.user)
  }

  // saveInSession(key, user: Iuser): void {
  //   localStorage.setItem(key, JSON.stringify(user));

  //  }

}
