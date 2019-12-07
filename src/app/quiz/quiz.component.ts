import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private api:QuizService,private userApi:UsersService,private aRoute:ActivatedRoute) 
  {
    let id = this.aRoute.snapshot.paramMap.get('id');
    if(id){
      this.api.getQuizById(id);
    }
   }
  ngOnInit() {
    this.api.getAll();
    this.userApi.token;
  }

}
