import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public token = '';
  constructor() { }
  public isMenuCollapsed = true;

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }

}
