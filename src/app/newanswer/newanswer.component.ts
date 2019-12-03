import { Component, OnInit } from '@angular/core';
import { AnswerModel } from './answer.model';
import { AnswerService } from './answer.service';
import { QuestionService } from '../newquestion/question.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newanswer',
  templateUrl: './newanswer.component.html',
  styleUrls: ['../newquiz/newquiz.component.css']
})
export class NewanswerComponent implements OnInit {
  public answerModel = new AnswerModel();
  constructor(private answerApi: AnswerService,private questionApi:QuestionService) { }

  ngOnInit() {
  }
  post(answerModel:AnswerModel){
    answerModel.questionId = this.questionApi.questionId;
    this.answerApi.createAnswer(answerModel);
    
  }
  onReset(form:NgForm){
    form.reset();
  }

}
