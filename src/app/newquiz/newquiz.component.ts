import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { QuizService } from '../quiz/quiz.service';
import { NgForm } from '@angular/forms';
import { QuizModel } from '../quiz/quiz.model';

@Component({
  selector: 'app-newquiz',
  templateUrl: './newquiz.component.html',
  styleUrls: ['./newquiz.component.css']
})
export class NewquizComponent implements OnInit {
  public quizModel = new QuizModel();
  constructor(private userApi:UsersService,private quizApi:QuizService) { }

  ngOnInit() {
  }
  post(quizModel:QuizModel){
    quizModel.userName = this.userApi.user;
    this.quizApi.createQuiz(quizModel);
    
  }
  onReset(form:NgForm){
    form.reset();
  }

}
