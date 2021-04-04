import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/modelos/Iuser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() user: Iuser;

  constructor() { }

  ngOnInit(): void {
  }

}
