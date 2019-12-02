import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public questionId = 0;
  constructor(private http: HttpClient, private router: Router) { }
  createQuestion(questionModel){
    this.http.post('http://localhost:63040/api/question/newquestion',questionModel).subscribe((data: any) => {
      localStorage.setItem("questionId", data.id);
      this.questionId = parseInt(localStorage.getItem('questionId'));
      console.log(JSON.stringify(data))
      this.router.navigate(['/newanswer']);
    }, error => console.log(error));
  }
}
