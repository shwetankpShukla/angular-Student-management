import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { Header1Component } from './header1/header1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { WelcomeComponent } from './static/welcome/welcome.component';
import { ProfileComponent } from './static/profile/profile.component';
import { AboutComponent } from './static/about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    Header1Component,
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    ListStudentComponent,
    AddStudentComponent,
    ViewStudentComponent,
    WelcomeComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([])
  ]
})
export class PostLoginModule { }
