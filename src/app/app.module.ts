import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PreLoginModule} from './pre-login/pre-login.module'
import { PostLoginModule } from './post-login/post-login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  
  declarations: [
    AppComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PreLoginModule,
    PostLoginModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  exports: [
    
],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
