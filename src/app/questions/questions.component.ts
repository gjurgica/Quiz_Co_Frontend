import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  id;
  questions;
  constructor(private quizApi:QuizService,private aRoute:ActivatedRoute,private dialog:MatDialog) { 
  }
  
  ngOnInit() {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.quizApi.getQuizById(this.id).subscribe(res => {
        this.questions = res
      console.log(this.questions)})
    }
    
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  

}
