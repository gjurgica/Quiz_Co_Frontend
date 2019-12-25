import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewquizComponent } from './newquiz/newquiz.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { NewanswerComponent } from './newanswer/newanswer.component';
import { QuestionsComponent } from './questions/questions.component';
import { ScoreComponent } from './score/score.component';
import { ProfileComponent } from './profile/profile.component';

export const appRoutes: Routes = [
  {
    path: 'quiz/:id',
    component: QuestionsComponent
  },
    {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'newquiz',
        component: NewquizComponent
      },
      {
        path: 'newquestion',
        component: NewquestionComponent
      },
      {
        path: 'newanswer',
        component: NewanswerComponent
      },
      {
        path: 'score',
        component: ScoreComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
]

