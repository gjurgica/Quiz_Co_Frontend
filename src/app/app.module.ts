import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersService } from './users.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { appRoutes } from './routes';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './quiz/quiz.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NewquizComponent } from './newquiz/newquiz.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { NewanswerComponent } from './newanswer/newanswer.component';
import { QuestionsComponent } from './questions/questions.component';
import {MatFormFieldModule,MatInputModule,MatRadioModule,MatDialogModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    QuizComponent,
    LoadingSpinnerComponent,
    NewquizComponent,
    NewquestionComponent,
    NewanswerComponent,
    QuestionsComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [
    UsersService,
    QuizService
  ],
  bootstrap: [AppComponent],
  entryComponents:[ScoreComponent]
})
export class AppModule { }
