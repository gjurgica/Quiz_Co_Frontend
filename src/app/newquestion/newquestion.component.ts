import { Component, OnInit } from '@angular/core';
import { QuestionModel } from './question.model';
import { QuizService } from '../quiz/quiz.service';
import { NgForm } from '@angular/forms';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['../newquiz/newquiz.component.css']
})
export class NewquestionComponent implements OnInit {
  public questionModel = new QuestionModel();
  constructor(private quizApi:QuizService,private questionApi:QuestionService) { }

  ngOnInit() {
  }
  post(questionModel:QuestionModel){
    questionModel.quizId = this.quizApi.quizId;
    this.questionApi.createQuestion(questionModel);
    
  }
  onReset(form:NgForm){
    form.reset();
  }

}
