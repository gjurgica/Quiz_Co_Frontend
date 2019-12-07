import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { QuizModel } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizes:QuizModel[];
  public quizId = '';
  public quiz:QuizModel;
  constructor(private http: HttpClient, private router: Router) { }
  getAll(){
    this.http.get('http://localhost:63040/api/quiz').subscribe((data: any[]) => {
      this.quizes = data;
      console.log(data);
    }, error => console.log(error));
    this.quizId = '';
  }
  getQuizById(id){
    this.http.get('http://localhost:63040/api/quiz/${id}').subscribe((data: any) => {
      this.quiz = data;
      console.log(this.quiz);
      this.router.navigate(['/questions']);
    }, error => console.log(error));
  }
  createQuiz(quizModel){
    this.http.post('http://localhost:63040/api/quiz/newquiz',quizModel).subscribe((data: any) => {
      localStorage.setItem("quizId", data.id);
      this.quizId = localStorage.getItem('quizId');
      console.log(JSON.stringify(data))
      this.router.navigate(['/newquestion']);
    }, error => console.log(error));
  }
}
