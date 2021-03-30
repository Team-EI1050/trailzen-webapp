import { Component, OnInit } from '@angular/core';
import { USER_TYPE } from './user-type';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  id: String = "";
  username: String = "New user!";
  type: USER_TYPE = USER_TYPE.usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
