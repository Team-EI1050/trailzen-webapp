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
 
  constructor(){
    let us :Iuser = new user("", "", "USUARIO");
    localStorage.setItem("USER", JSON.stringify(us));
  }

  ngOnInit(): void {
  }


}
