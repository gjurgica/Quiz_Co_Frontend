import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewquizComponent } from './newquiz/newquiz.component';

export const appRoutes: Routes = [
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
        path: 'newquiz',
        component: NewquizComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
]

