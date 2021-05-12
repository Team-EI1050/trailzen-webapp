
import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../../app/modelos/Iuser';
import { user } from '../../../app/modelos/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id = '6075a29951822b2eb1f8f43c';
  user: Iuser;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("USER"));
  }

  // Returns the id of the current user
  getUserId(): String {
    let us :Iuser = JSON.parse(localStorage.getItem("USER"));
    return us.nickname;
  }

  cerrarSesion(){
    let us :Iuser = new user("", "", "USUARIO");
    localStorage.setItem("USER", JSON.stringify(us));
  }

}
