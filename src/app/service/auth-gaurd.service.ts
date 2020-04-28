import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHandler, HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService, private http: HttpClient ) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {
      return this.authService.isLoggedIn         // {1}
        .pipe(
          take(1),                              // {2} 
          map((isLoggedIn: boolean) => {         // {3}
            if (!isLoggedIn){
              this.router.navigate(['/login']);  // {4}
              return false;
            }
            return true;
          })
        );
    }

}
