import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CREDENTIALS } from '../../shared/constant/common-constant';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { LoginService } from 'src/app/post-login/service/login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials: any = [];
  disabled = false;
  selected = '';
  constructor(private fb: FormBuilder, private router: Router, private loginService:LoginService) {
    this.loginForm = this.fb.group({
      uid: ['',[Validators.required,Validators.minLength(4)]],
      pwd: ['',Validators.required],
      disabled: true
    });
    this.disabled = false;
    this.credentials = CREDENTIALS;
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.valid) {
  
      if (this.selected === 'OP1') {
        // const cred = this.credentials.find((user: any) =>
        //   user.userId == this.loginForm.value.uid &&
        //   user.password == this.loginForm.value.pwd
        // );
        if (this.loginService.loginWithStubData(this.loginForm.value.uid,this.loginForm.value.pwd)) {
          this.router.navigate(['dashboard/welcome']);
        }
      } else if (this.selected === 'OP2') {
        // https://github.com/shwetankpShukla/angular-app-support-application.git
        if (this.loginService.loginWithNormalAuth(this.loginForm.value.uid,this.loginForm.value.pwd)) {
          //this.router.navigate(['dashboard/welcome']);
        }
      } else if (this.selected === 'OP3') {
        //https://github.com/shwetankpShukla/spring-security.git
        this.loginService.loginWithSecureApplication(this.loginForm.value.uid,this.loginForm.value.pwd)
        if (true) {
          this.router.navigate(['dashboard/welcome']);
        }
      }
    }
  }

}
