import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient, private router: Router) { }
  createAnswer(answerModel){
    this.http.post('http://localhost:63040/api/answer/newanswer',answerModel).subscribe((data: any) => {
      console.log(JSON.stringify(data))
      this.router.navigate(['/newanswer']);
    }, error => console.log(error));
  }
}
