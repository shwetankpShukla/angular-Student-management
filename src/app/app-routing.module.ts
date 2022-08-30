import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pre-login/login/login.component'
import {DashboardComponent} from './post-login/dashboard/dashboard.component'
import { ListStudentComponent } from './post-login/student/list-student/list-student.component';
import { WelcomeComponent } from './post-login/static/welcome/welcome.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'student',component:ListStudentComponent},
  {path:'welcome',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
