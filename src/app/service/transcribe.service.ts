import { Injectable, Component, ElementRef, Input } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHandler, HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';



@Injectable({
  providedIn: 'root'
})
export class TranscribeService {
  
  private SERVER_BASE_URL='http://localhost:8585/api/v1/';

  constructor(private http: HttpClient, private router: Router,
    private el: ElementRef ) {}

  
  /*
    upload = function(name: string , content: string ) {    

    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let authtoken = localStorage.getItem('authtoken');
    let jsessionId = localStorage.getItem('jSessionId');

    if (authtoken) {
        headers.append("Authorization", 'Token ' + authtoken)
    }

    headers.append("Accept", 'application/json');
    headers.append("Content-Type","application/multi-part");

    
    const fd : any  = new FormData();
    fd.append('name', name);
    fd.append('file', content);   

    return http.POST({
      method: 'POST',
      url: SERVER_BASE_URL + 'upload',
      data: fd,
      //transformRequest: angular.identity,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: {
        'file': fd
      }}).then(function(res) {       
        return res.headers('Location');
      }, function(reason) {
          throw reason;
      });
};
*/
}
