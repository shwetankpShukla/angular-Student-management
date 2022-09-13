import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CREDENTIALS } from '../../shared/constant/common-constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials: any = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      uid: [''],
      pwd: ['']

    });

    this.credentials = CREDENTIALS;
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.loginForm.valid) {
      const cred = this.credentials.find((user: any) =>
        user.userId == this.loginForm.value.uid &&
        user.password == this.loginForm.value.pwd
      );
      if (cred) {
        this.router.navigate(['dashboard/welcome']);
      }
    }
  }

}
