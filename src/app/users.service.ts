import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginModel } from './login/login.model';
import { RegisterModel } from './register/register.model';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public users = [];
public token = '';
public userName = '';
public user = new UserModel();
public loginModel = new LoginModel();
public registerModel = new RegisterModel();
isLoading = false;
public check = '';
public path  = localStorage.getItem("imagePath");
  constructor(private http:HttpClient,private router: Router) { }
  getUsers(){
    this.http.get('http://localhost:63040/api/users')
    .subscribe((data: any[]) => {
      this.users = data;
    }, error => console.log(error));
  }
  getUser(){
    return this.http.get('http://localhost:63040/api/users/' + this.userName);
  }
  login(){
    this.onSubmit('http://localhost:63040/api/users/login',this.loginModel);
  };
  register(){
    this.onSubmit('http://localhost:63040/api/users/register',this.registerModel);
  }
  update(){
    this.http.post('http://localhost:63040/api/users/update',this.user)
    .subscribe((data:any)  => {
      this.user = data;
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("check", data.userName);
      this.check = localStorage.getItem("check");
      this.userName = localStorage.getItem('userName');
      console.log(this.user)
    }, error => console.log(error))
  }
  public onSubmit(httpString: string,model:any) {
    this.isLoading = true;
    this.http.post(httpString, model).subscribe((data: any) => {
      this.user = data;
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("token", data.token);
      localStorage.setItem("check", data.userName);
      this.check = localStorage.getItem("check");
      if(this.check !== this.userName){
        this.path = 'usersImages/' + data.imageUrl;
        this.check = this.userName;
        localStorage.setItem("imagePath", this.path);
      }
      this.token = localStorage.getItem('token');
      this.userName = localStorage.getItem('userName');
      this.router.navigate(['/']);
      this.isLoading = false
    }, error => console.log(error));
    this.isLoading = false
  }
  public logout(){
    this.http.get('http://localhost:63040/api/users/logout');
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    this.token = localStorage.getItem('token');
    this.userName = localStorage.getItem('userName');
    this.router.navigate(['/']);
  }
  upload(file){
    var formData = new FormData();
    formData.append('photo',file);
    this.http.post('http://localhost:63040/api/users/' + this.userName,formData)
    .subscribe(data => {this.user.imageUrl = data;
    localStorage.setItem("imagePath", this.user.imageUrl.folderName); 
    this.path = localStorage.getItem("imagePath");
    console.log(data)});

  }
}
