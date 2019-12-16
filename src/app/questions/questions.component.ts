import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  id;
  questions;
  selectedAnswer;
  correct = 0;
  constructor(private quizApi:QuizService,private aRoute:ActivatedRoute,private dialog:MatDialog) { 
  }
  
  ngOnInit() {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.quizApi.getQuizById(this.id).subscribe(res => {
        this.questions = res
        console.log(this.id)
      console.log(this.questions)})
    }
    
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    console.log(this.selectedAnswer);
    if(this.selectedAnswer.isCorrect === true){
      this.correct++;
    }
  }

  prevStep() {
    this.step--;
  }
  finish(){
    console.log(this.correct);
    const dialogRef = this.dialog.open(ScoreComponent, {
      data: {correct:this.correct,total:this.questions.length}
    });

  }

}
