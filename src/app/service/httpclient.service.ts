import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class AppHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('Content-Type', 'application/json');
    const authReq = req.clone({ headers });
    return next.handle(authReq);
  }
}



export class Employee{

  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  
  constructor(  private httpClient:HttpClient   ) { 
    this.httpClient = httpClient;
     }

     

     getEmployees()
  {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
       return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
  }

  public deleteEmployee(employee) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId,{headers});
  }

  public createEmployee(employee) {
    let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee,{headers});
  }
}