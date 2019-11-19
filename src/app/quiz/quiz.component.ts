import { Component, OnInit } from '@angular/core';
import { QuizModel } from './quiz.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public quizes:QuizModel[];

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.http.get('http://localhost:63040/api/quiz').subscribe((data: any[]) => {
      this.quizes = data;
    }, error => console.log(error));
  }

}
