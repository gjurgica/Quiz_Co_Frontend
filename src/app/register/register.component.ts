import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private api:UsersService,private router: Router) {}
  ngOnInit() {
    this.api.registerModel;
    this.api.register();

}
onReset(form:NgForm){
  form.reset();
  this.router.navigate(['/login']);
}
}
