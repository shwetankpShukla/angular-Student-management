import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pre-login/login/login.component'
import {DashboardComponent} from './post-login/dashboard/dashboard.component'
import {ListStudentComponent } from './post-login/student/list-student/list-student.component';
import {WelcomeComponent } from './post-login/static/welcome/welcome.component';
import { AboutComponent } from './post-login/static/about/about.component';
import { StudentHelpComponent } from './post-login/static/student-help/student-help.component';
import { SettingComponent } from './post-login/static/setting/setting.component';
import { ProfileComponent } from './post-login/static/profile/profile.component';
import { InboxComponent } from './post-login/static/inbox/inbox.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
    children: [
      {path:'student',component:ListStudentComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'about',component:AboutComponent},
      {path:'help',component:StudentHelpComponent},
      {path:'setting',component:SettingComponent},
      {path:'profile',component:ProfileComponent},
      {path:'inbox',component:InboxComponent}
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
