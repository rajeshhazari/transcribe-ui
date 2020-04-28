import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser && currentUser.JwtToken){
            console.log('headers:', req.headers); // <---- I can see headers in console output
        }
        const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('JWToken'))
        });
        return next.handle(clonedRequest);

    }
}