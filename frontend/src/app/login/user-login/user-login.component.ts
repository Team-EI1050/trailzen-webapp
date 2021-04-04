
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from 'src/app/modelos/Iuser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Input() user: Iuser;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  getUser(id: String, type: String): void {
 
    this.userService.getUser(id, type).subscribe(res => {
      this.user = res;
      console.log(this.user.nickname);
    })
  }
}
