import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private api:UsersService) {}
  ngOnInit() {
    this.api.registerModel;
    this.api.register();

}
onReset(form:NgForm){
  form.reset();
}
}
