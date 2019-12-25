import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private api:UsersService) { }

  ngOnInit() {
    this.api.loginModel;
    this.api.login();
    this.api.path;
  }
  onReset(form:NgForm){
    form.reset();
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:63040/${serverPath}`;
  }

}
