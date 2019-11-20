import { Component, OnInit } from '@angular/core';
import { QuizModel } from './quiz.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private api:QuizService) { }
  ngOnInit() {
    this.api.getAll();
  }

}
