import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName:new FormControl('', Validators.required),
    email:new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password:new FormControl('', Validators.required),
    confirmPassword:new FormControl('', Validators.required)
  });
  constructor(private fb:FormBuilder,private api:UsersService) {}
  ngOnInit() {
  }

}
