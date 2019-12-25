import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private api:UsersService) { }
  public isMenuCollapsed = true;

  ngOnInit() {
    this.api.token;
    this.api.userName;
    this.api.logout();
    this.api.getUser();
  }

}
