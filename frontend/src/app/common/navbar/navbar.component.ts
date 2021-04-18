
import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/modelos/Iuser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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

}
