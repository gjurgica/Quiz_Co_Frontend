import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { QuizModel } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizes:QuizModel[];
  constructor(private http: HttpClient, private router: Router) { }
  getAll(){
    this.http.get('http://localhost:63040/api/quiz').subscribe((data: any[]) => {
      this.quizes = data;
    }, error => console.log(error));
  }
  createQuiz(quizModel){
    this.http.post('http://localhost:63040/api/quiz/newquiz',quizModel).subscribe((data: any) => {
      console.log(JSON.stringify(data))
      this.router.navigate(['/newquestion']);
    }, error => console.log(error));
  }
}
