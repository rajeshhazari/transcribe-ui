import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService, AlertService } from '../service';
import { User } from '../_models';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    returnUrl: string;
  currentUserSubject: any;
  formSubmitAttempt: boolean; // {2}
  private message: string;
  private credentials;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService
) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/home']);
    }
}

      public get currentUserValue(): User {
          return this.currentUserSubject.value;
      }

 /*  invalidCredentialMsg: string;
  username = '';
  password = '';
  invalidLogin = false;
  invalidSession = false;
  retUrl = 'home';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
tService          */

ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
      this.formSubmitAttempt = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(loginForm: User) {
      this.formSubmitAttempt = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return false;
      }
      console.log('this.f.username.value:: ',this.f.password.value);
      this.loading = true;
      this.authenticationService.authenticate(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                console.log('data:', data);
                if (data.token !== '') {
                  localStorage.setItem('user', JSON.stringify(data));
                  localStorage.setItem('currentUserPermissions', JSON.stringify(data.roles));
                  localStorage.setItem('JWToken', data.token);
                  this.router.navigate(['/home']);
                }
                this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }


  login(username: string, password: string) {
    const user = this.authenticationService.authenticate(username, password);
}

logout(){
  this.authenticationService.logOut();
}
}
