import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getUsers(){
    this.http.get('http://localhost:63040/api/users')
    .subscribe(res => {console.log(res)});
  }
}
