import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-currentime',
  templateUrl: './currentime.component.html',
  styleUrls: ['./currentime.component.css']
})
export class CurrentimeComponent {
  
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  

  

}
