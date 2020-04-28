import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RecentTranComponent } from './recent-tran/recent-tran.component';
import { RegisterComponent } from './register/register.component';
import { TranscribeComponent } from './transcribe/transcribe.component';



const routes: Routes = [
 
  { path: '', component: HomeComponent,canActivate:[AuthGaurdService] },
  { path: 'home', component: HomeComponent ,canActivate:[AuthGaurdService]},
  { path: 'recenttran', component: RecentTranComponent , canActivate:[AuthGaurdService] },
  { path: 'transcribe', component: TranscribeComponent , canActivate:[AuthGaurdService] },
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'contactus', component: ContactUsComponent,canActivate:[AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
