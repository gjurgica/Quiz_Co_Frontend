import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './register.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  public onSubmit() {
    this.isLoading = true
    this.http.post<RegisterModel>('http://localhost:63040/api/users/register',this.registerModel)
    .subscribe((data: any) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.userName);
      this.router.navigate(['/']);
      this.isLoading = false
    }, error => {
      console.log(error)
      this.isLoading = false
    });
      
  }

}
