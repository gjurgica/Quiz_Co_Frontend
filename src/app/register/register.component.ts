import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './register.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel
  isLoading = false
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    this.registerModel = new RegisterModel();
  }
  public onSubmit(form:NgForm) {
    this.isLoading = true;
    form.reset();
    this.http.post<RegisterModel>('http://localhost:63040/api/users/register',this.registerModel)
    .subscribe((data: any) => {
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("token", data.token);
      console.log(JSON.stringify(data))
      this.router.navigate(['/']);
      this.isLoading = false     
    }, error => {
      console.log(error)
      this.isLoading = false
    });
      
  }

}
