import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';
import { QuizService } from '../quiz/quiz.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('fileInput',{static: true}) fileInput: ElementRef;
  public path;
  constructor(private userApi:UsersService,private quizApi:QuizService) { }

  ngOnInit() {
    this.userApi.user;
    this.userApi.path;
  }
  uploadPhoto(){
    var nativeElement:HTMLInputElement =  this.fileInput.nativeElement;
    this.userApi.upload(nativeElement.files[0]);
  }
  public createImgPath = (serverPath: string) => {
    return `http://localhost:63040/${serverPath}`;
  }

}
