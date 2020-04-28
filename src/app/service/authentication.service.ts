import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User} from '../_models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public JwtToken: string;
  private invalidLogin: boolean;
  /* const headers = new HttpHeaders(credentials ? {
    authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {}); */
    private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }


  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.JwtToken = JSON.parse(localStorage.getItem('JwtToken'));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
     authenticate(username: string, password: string) {
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

      if (username === 'rajeshhazari' && password === 'password') {
        localStorage.setItem('username', username);
        this.loggedIn.next(true);
        this.invalidLogin =  true;
        let userresp =  new User();
        userresp.username = username;
        userresp.token = '32323232323';
        this.currentUserSubject = new BehaviorSubject<User>(userresp);
        return this.currentUserSubject.asObservable();
      }

      /*return this.httpClient.get<User>('http://localhost:8585/api/v1/auth/authenticate',{headers}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          sessionStorage.setItem('JSESSIONID',username);
          //sessionStorage.setItem('session',session);
          return userData;
         }
       )

      );
      */
      return this.http.post<any>(`/users/authenticate`, { username, password })
     .pipe(map(user => {
         // login successful if there's a jwt token in the response
         if (user && user.token) {
            this.loggedIn.next(true);
             // store user details and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('user', JSON.stringify(user));
             this.currentUserSubject.next(user);
         }

         return user;
     }));
    }

/* 
  isUserLoggedIn() {
    const user = localStorage.getItem('user');
    console.log('isUserLoggedIn :: ' + !(user === null));
    return !(user === null);
  } */

  logOut() {
     /*return this.httpClient.get<UserDto>('http://localhost:8585/api/v1/auth/logout',{headers}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          sessionStorage.setItem('JSESSIONID',username);
          //sessionStorage.setItem('session',session);
          return userData;
         }
       )

      );
      */
     localStorage.removeItem('user');
     this.currentUserSubject.next(null);
  }


  // TODO change the logic when you are ready
validateSession() {

  /*(this.loginservice.validateSession(this.username, this.password).subscribe(
    data => {
      this.router.navigate(['']);
      this.invalidLogin = false;
    },
    error => {
      this.router.navigate(['/login']);
      this.invalidLogin = true;
      this.authMsg = 'Session Invalidate!, Please Login.';

    }
  )
  );
    */
   return false;
}
}
