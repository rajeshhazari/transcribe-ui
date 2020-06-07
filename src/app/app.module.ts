import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxUploaderModule } from '../../node_modules/ngx-uploader';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


 //import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faUser, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { RecentTranComponent } from './recent-tran/recent-tran.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RightnavComponent } from './rightnav/rightnav.component';
import { TranscribeComponent } from './transcribe/transcribe.component';
import { CurrentimeComponent } from './currentime/currentime.component';
import { httpInterceptorProviders } from './_helpers';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    ContactUsComponent,
    RegisterComponent,
    HomeComponent,
    PaymentComponent,
    RecentTranComponent,
    EmployeeComponent,
    LeftnavComponent,
    RightnavComponent,
    TranscribeComponent,
    CurrentimeComponent,
    PrivacyPolicyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUploaderModule
  ],
  exports:[
    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
