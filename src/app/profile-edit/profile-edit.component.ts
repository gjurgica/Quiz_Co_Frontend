import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['../newquiz/newquiz.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private userApi:UsersService) { }

  ngOnInit() {
    this.userApi.user;
    this.userApi.update();
  }

}
