import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginModel: LoginModel;
  isLoading = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loginModel = new LoginModel();
  }
  public onSubmit(form:NgForm) {
    this.isLoading = true;
    form.reset();
    this.http.post('http://localhost:63040/api/users/login', this.loginModel).subscribe((data: any) => {
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("token", data.token);
      console.log(JSON.stringify(data))
      this.router.navigate(['/']);
      this.isLoading = false
    }, error => console.log(error));
    this.isLoading = false
  }

}
