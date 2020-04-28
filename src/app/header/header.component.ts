import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUsers = faUsers;
  constructor(private loginService:AuthenticationService){
   
   }
  ngOnInit() {
  }

  logout = () => {
     this.loginService.logOut();     


}
}
