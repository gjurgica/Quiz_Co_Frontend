import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginModel } from './login/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public users = [];
public loginModel = new LoginModel();
isLoading = false;
  constructor(private http:HttpClient,private router: Router) { }
  getUsers(){
    this.http.get('http://localhost:63040/api/users')
    .subscribe((data: any[]) => {
      this.users = data;
    }, error => console.log(error));
  }
  public onSubmit() {
    this.isLoading = true;
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
