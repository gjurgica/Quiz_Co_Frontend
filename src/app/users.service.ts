import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient,private router: Router) { }
  getUsers(){
    this.http.get('http://localhost:63040/api/users')
    .subscribe(res => {console.log(res)});
  }
  register(model){
    this.http.post('http://localhost:63040/api/users/register',model)
    .subscribe((data: any) => {
      this.router.navigate(['/home']);
    }, error => console.log(error))
  }
}
