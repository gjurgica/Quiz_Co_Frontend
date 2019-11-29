import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private api:QuizService,private userApi:UsersService) { }
  ngOnInit() {
    this.api.getAll();
    this.userApi.token;
  }

}
